import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const MisProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('my-key');//sacamos la data de async
        console.log('Async:', jsonValue);
        if (jsonValue !== null) {
          const parsedData = JSON.parse(jsonValue);
          setData(parsedData);
        } else {
          setData([]);
        }
      } catch (e) {
        console.error('Error reading data:', e);
      }
    };

    getData();
  }, []);

  const handleIncrement = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity || 0) + 1 };
      }
      return item;
    });
    setData(updatedData);
    AsyncStorage.setItem('my-key', JSON.stringify(updatedData));
  };

  const handleDecrement = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setData(updatedData);
    AsyncStorage.setItem('my-key', JSON.stringify(updatedData));
  };

  const POST_COMPRA = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/cliente/2/compra`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: id, cantidad: 1 }),
      });

      if (response.ok) {
        console.log('Compra realizada con éxito');
      } else {
        console.error('Error al realizar la compra');
      }
    } catch (error) {
      console.error('Error al realizar la compra', error);
    }
  };

  const limpiarCache = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Caché limpiada correctamente');
      setData([]); // Limpiar también el estado local
    } catch (e) {
      console.error('Error al intentar limpiar la caché:', e);
    }
  };

  const borrarTodo = () => {
    setData([]);
    AsyncStorage.removeItem('my-key');
    console.log('Datos de compras borrados correctamente');
  };

  const style = {
    button: {
      // Agrega cualquier estilo adicional que necesites para tu botón aquí
    },
  };

  return (
    <View>
      <Button onPress={borrarTodo} style={style.button}>
        <FontAwesome name="trash" size={10} color="black" />
        Borrar Todo
      </Button>

      {data.map((item, index) => (
        <Card key={index} style={{ margin: 10 }}>
          <Card.Content>
            <Text>ID: {item.id}</Text>
            <Text>Author: {item.author}</Text>
            <Text>Width: {item.width}</Text>
            <Text>Height: {item.height}</Text>
            <Text>Quantity: {item.quantity || 0}</Text>
          </Card.Content>

          <Card.Actions style={{ justifyContent: 'space-between' }}>
            <Button onPress={() => POST_COMPRA(item.id)}>Comprar</Button>
            <Button onPress={() => handleIncrement(item.id)}>+1</Button>
            <Button onPress={() => handleDecrement(item.id)}>-1</Button>
          </Card.Actions>
        </Card>
      ))}
    </View>
  );
};
