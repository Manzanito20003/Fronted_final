import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import axios from 'axios';
import { TextInput } from 'react-native-paper';

const C_Width = Dimensions.get('window').width;
const C_Height = Dimensions.get('window').height;

export default function C_galeria() {
  const [image, setImage] = useState(null);
  const [stock, setStock] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [nombre, setNombre] = useState('');
  const [fabricante, setFabricante] = useState('');

  const submitProduct = async () => {
    const producto = {
      img: image,
      stock: stock,
      precio: precio,
      nombre: nombre,
      estado: true,
      fabricante: fabricante,
    };

    try {
      const response = await axios.post('https://backend-deploy-production-318f.up.railway.app/producto', producto);
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={style.body}>
      <View>
        <TouchableOpacity style={{ margin: 10 }} onPress={pickImage}>
          <AntDesign name="picture" size={35} color="black" />
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={style.img} />}
      </View>
      <View style={style.cj_form}>
        <TextInput
          style={style.input}
          label="Nombre Producto"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />
        <TextInput
          style={style.input}
          label="Precio"
          value={precio.toString()}
          onChangeText={(text) => setPrecio(Number(text))}
          keyboardType="numeric"
        />
        <TextInput
          style={style.input}
          label="Stock"
          value={stock.toString()}
          onChangeText={(text) => setStock(Number(text))}
          keyboardType="numeric"
        />
        <TextInput
          style={style.input}
          label="Fabricante"
          value={fabricante}
          onChangeText={(text) => setFabricante(text)}
        />
        <Button title="Enviar" onPress={submitProduct} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    width: C_Width,
    height: C_Height,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    margin: 20,
  },
  img: {
    width: C_Width * 0.2,
    height: C_Height * 0.2,
    borderRadius: 35,
  },
  cj_form: {
    alignSelf: 'flex-start',
    width: C_Width * 0.5,
    height: C_Height,
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
});
