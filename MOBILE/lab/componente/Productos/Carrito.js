import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Carrito = ({ id }) => {
  const [cant, setCant] = useState(0);
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    getData();
  }, []);

  const enviarPost = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    });
  };

  const interpolatedColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#7DCEA0', '#ffffff'],
  });

  const animatedStyle = {
    backgroundColor: interpolatedColor,
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      console.log('jsonValue:', jsonValue);
      if (jsonValue !== null) {
        const parsedData = JSON.parse(jsonValue);
        const item = parsedData.find((item) => item.id === id);
        if (item) {
          setCant(item.cantida);
        } else {
          setCant(0);
        }
        return parsedData; // Devolver el valor
      } else {
        setCant(0);
        return []; // Devolver un array vacío si no hay datos
      }
    } catch (e) {
      console.error('Error reading data:', e);
      return []; // Devolver un array vacío en caso de error
    }
  };

  const pushData = async (newValue) => {
    try {
      const existingValue = await AsyncStorage.getItem('my-key');

      if (!existingValue) {
        const newArray = [newValue];
        const jsonValue = JSON.stringify(newArray);
        await AsyncStorage.setItem('my-key', jsonValue);
        return newArray; // Devolver el nuevo array
      } else {
        const existingArray = JSON.parse(existingValue);
        const index = existingArray.findIndex((item) => item.id === newValue.id);

        if (index !== -1) {
          existingArray[index].cantida = newValue.cantida;
        } else {
          existingArray.push(newValue);
        }

        const jsonValue = JSON.stringify(existingArray);
        await AsyncStorage.setItem('my-key', jsonValue);
        return existingArray; // Devolver el array actualizado
      }
    } catch (e) {
      console.error('Error al intentar hacer push en AsyncStorage:', e);
      return []; // Devolver un array vacío en caso de error
    }
  };

  const guardarDatos = async () => {
    const guarda = {

      id: id,
      nombre:nombre,
      precio:precio,
      cantida: cant + 1,
    };

    try {
      const data = await getData();

      if (data.length > 0 && data.some((e) => e.id === id)) {
        console.log('No se agrega');
      } else {
        const updatedData = await pushData(guarda);
        console.log('Datos actualizados:', updatedData);
      }
    } catch (error) {
      console.error('Error al procesar el post:', error);
    }
  };

  return (
    <View>
      <Button onPress={() => { enviarPost(); guardarDatos(); }} style={[styles.button, animatedStyle]}>
        <FontAwesome name="cart-arrow-down" size={24} color="black" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    color: '#7DCEA0',
    padding: 10,
    borderRadius: 40,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#145A32 ',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    width: 150,
    height: 40,
  },
});

export default Carrito;
