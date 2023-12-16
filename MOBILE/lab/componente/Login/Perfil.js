import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import { Image } from 'expo-image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Camera from '../Image/C_Image';
import { AntDesign } from '@expo/vector-icons';

const Perfil = ({ navigation }) => {
  const [img, setImg] = useState({
    uri: 'https://picsum.photos/seed/698/3000/2000',
  });

  const [data, setData] = useState({
    userName: '',
    email: '',
    cantidad_compras: 0,
    direccion: '',
    id: '',
  });

  const borrar_cuenta = async () => {
    try {
      await AsyncStorage.removeItem('user');
      console.log('Elemento user eliminado ');
      navigation.navigate('Login');
    } catch (e) {
      console.log('Error al eliminar el elemento', e);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('user');
        if (value !== null) {
          const userData = JSON.parse(value);
          setData(userData);
        }
      } catch (error) {
        console.error('Error reading value:', error);
      }
    };

    getData();
  }, []);

  if (!data) {
    return <Text>Cargando...</Text>;
  }
  function agregar_producto(){
    navigation.navigate("C_galeria")
  }

  return (
    <View style={{ flex: 1, width: '100%', height: '100%', alignItems: 'center', padding: 10 }}>
      <Image source={img} style={{ width: 300, height: 300, borderRadius: 10 }} />
      <View style={{ marginTop: 20 }}>
        <Text>
          UserName: {data.userName}
          {'\n'}
          Email: {data.email}
          {'\n'}
          Cantidad Compras: {data.cantidad_compras}
          {'\n'}
          Dirección: {data.direccion}
          {'\n'}
          ID: {data.id}
        </Text>
      </View>
       <Camera></Camera>

       <View>
       <Button onPress={agregar_producto}>
       <AntDesign name="plus" size={24} color="black" />
        <Text> agregar un producto</Text>
      </Button>
        </View>

      <Button onPress={borrar_cuenta}>
        <FontAwesome name="trash" size={20} color="red" />
        <Text> Borrar cuenta</Text>
      </Button>
    </View>
  );
};

export default Perfil;
