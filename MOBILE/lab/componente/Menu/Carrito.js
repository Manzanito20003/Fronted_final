import React, { useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Carrito = ({ item }) => {
  const [animation] = useState(new Animated.Value(0));

  const animacion = () => {
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

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-key', jsonValue);
    } catch (error) {
      console.error('Error al intentar almacenar datos:', error);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      if (jsonValue !== null) {
        const parsedData = JSON.parse(jsonValue);
        return parsedData;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error al intentar leer datos:', error);
      return [];
    }
  };

  const agregar_async = async () => {
    try {
      console.log('Item:', item);
  
      // Verificar si item existe y tiene una propiedad id
      if (!item || typeof item !== 'object' || !item.id) {
        console.error('Error: El objeto item no es válido o no tiene la propiedad "id".');
        return;
      }
  
      // Obtener datos actuales
      const data = await getData();
  
      // Log para verificar el contenido de 'data' y 'item'
      console.log('Data actual:', data);
      console.log('Item a agregar:', item);
  
      // Verificar si el item ya existe en la lista
      let itemExistente = false;
  
      // Verificar si 'data' es un array antes de usar forEach
      if (Array.isArray(data)) {
        data.forEach((element) => {
          if (element.id === item.id) {
            itemExistente = true;
          }
        });
      }
  
      if (itemExistente) {
        console.log('El item ya existe en la lista. No se agrega.');
      } else {
        // Agregar el item a la lista
        const newData = Array.isArray(data) ? [...data, item] : [item];
        await storeData(newData);
        console.log('Item agregado correctamente a AsyncStorage.');
      }
  
    } catch (error) {
      console.error('Error en agregar_async:', error);
    }
  };
  
  
  

  return (
    <View>
      <Button onPress={() => { animacion(); agregar_async(); }} style={[styles.button, animatedStyle]}>
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
