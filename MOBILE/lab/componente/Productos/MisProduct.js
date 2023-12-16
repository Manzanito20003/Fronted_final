import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button, IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const MisProduct = () => {
  const [data, setData] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('my-key');
        const parsedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setData(parsedData);
        const totalCantidad = parsedData.reduce((total, item) => total + (item.cantidad || 0), 0);
        setCantidad(totalCantidad);
      } catch (e) {
        console.error('Error reading value:', e);
      }
    };
    fetchData();
  }, []);

  const handleIncrement = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, cantidad: (item.cantidad || 0) + 1 };
      }

      return item;
    });
    console.log(item)
    updateData(updatedData);
  };

  const handleDecrement = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id && item.cantidad > 0) {
        return { ...item, cantidad: item.cantidad - 1 };
      }
      return item;
    });
    updateData(updatedData);
  };

  const updateData = (updatedData) => {
    setData(updatedData);
    setCantidad(updatedData.reduce((total, item) => total + (item.cantidad || 0), 0));
    AsyncStorage.setItem('my-key', JSON.stringify(updatedData));
  };

  const POST_COMPRA = async (id) => {
    // Simplemente mostrar un mensaje de compra
    console.log(`Compra realizada para el producto con ID: ${id}`);
  };

  const limpiarCache = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Caché limpiada correctamente');
      setData([]); // Limpiar también el estado local
      setCantidad(0); // Reiniciar la cantidad
    } catch (e) {
      console.error('Error al intentar limpiar la caché:', e);
    }
  };

  const borrarTodo = () => {
    setData([]);
    setCantidad(0);
    AsyncStorage.removeItem('my-key');
    console.log('Datos de compras borrados correctamente');
  };

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#f2f2f2',
      flex: 1,
    },
    card: {
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#145A32',
      color: '#ffffff',
      padding: 10,
      borderRadius: 40,
      marginTop: 10,
    },
    buttonText: {
      color: '#ffffff',
    },
    deleteButton: {
      position: 'absolute',
      top: 5,
      right: 5,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Button onPress={borrarTodo} style={styles.button}>
        <FontAwesome name="trash" size={16} color="#ffffff" />
        <Text style={styles.buttonText}> Borrar Todo</Text>
      </Button>

      {data.map((item) => (
        <Card key={item.id} style={styles.card}>
          <IconButton
            icon="delete"
            size={20}
            style={styles.deleteButton}
            color="#ff6347"
            onPress={() => handleDelete(item.id)}
          />
          <Card.Content>
            <Text>ID: {item.id}</Text>
            <Text>{item.nombre}</Text>
            <Text>Precio: {item.precio}</Text>
            <Text>Cantidad: {item.cantidad || 0}</Text>
          </Card.Content>

          <Card.Actions style={{ justifyContent: 'space-between' }}>
            <Button onPress={() => POST_COMPRA(item.id)}>Comprar</Button>
            <Button onPress={() => handleIncrement(item.id)}>+1</Button>
            <Button onPress={() => handleDecrement(item.id)}>-1</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};
