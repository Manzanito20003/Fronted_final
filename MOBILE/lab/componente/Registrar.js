import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Alert } from 'react-native';
import { TextInput as PaperTextInput, Button as PaperButton } from 'react-native-paper';

const Registrar = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [cantidadCompras, setCantidadCompras] = useState(0);
  const [direccion, setDireccion] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Aquí podrías realizar acciones adicionales si `isLoggedIn` cambia
  }, [isLoggedIn]);

  const handleSubmit = async () => {
    if (isLoggedIn) {
      Alert.alert('Error', 'Ya estás logeado. No se creará un nuevo cliente.');
      console.log('Ya estás logeado. No se creará un nuevo cliente.');
      return;
    }

    try {
      // Verificar si el usuario ya está registrado
      const response = await fetch(`http://localhost:8080/cliente`);
      const data = await response.json();
      console.log("USER:", data);

      // Verificar si el correo electrónico ya existe
      const userWithEmail = data.find((element) => element.email === email);
      if (userWithEmail) {
        Alert.alert('Error', 'Ya existe un cliente con este correo electrónico.');
        console.log('Ya existe un cliente con este correo electrónico. No se creará un nuevo cliente.');
        return;
      }

      // Crear el cliente si el usuario no está registrado
      const responseCrearCliente = await fetch('http://localhost:8080/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          contrasena,
          cantidad_compras: cantidadCompras,
          direccion,
          username,
        }),
      });

      if (responseCrearCliente.ok) {
        console.log('Cliente creado exitosamente');
        setIsLoggedIn(true);
        navigation.navigate("Login", navigation);
      } else {
        console.error('Error al crear el cliente:', responseCrearCliente.status);
      }
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Crear Cliente</Text>
      <PaperTextInput
        label="Nombre de usuario"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <PaperTextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <PaperTextInput
        label="Contraseña"
        secureTextEntry
        value={contrasena}
        onChangeText={(text) => setContrasena(text)}
      />
      <PaperTextInput
        label="Cantidad de compras"
        keyboardType="numeric"
        value={cantidadCompras.toString()}
        onChangeText={(text) => setCantidadCompras(Number(text))}
      />
      <PaperTextInput
        label="Dirección"
        value={direccion}
        onChangeText={(text) => setDireccion(text)}
      />
      <PaperButton mode="contained" onPress={handleSubmit}>Crear</PaperButton>
    </View>
  );
};

export default Registrar;
