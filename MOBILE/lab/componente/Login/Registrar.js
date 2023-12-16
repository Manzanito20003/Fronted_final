import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Alert } from 'react-native';
import { TextInput as PaperTextInput, Button as PaperButton } from 'react-native-paper';
import { emailValidator, passwordValidator, textValidator } from '../auth/validators/validators';

const Registrar = ({ navigation }) => {
  const [userName, setUserName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [contrasena, setContrasena] = useState({ value: '', error: '' });
  const [direccion, setDireccion] = useState({ value: '', error: '' });
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
    const nameError = textValidator(userName.value);
    const emailError = emailValidator(email.value);
    const contrasenaError = passwordValidator(contrasena.value);

    if (nameError || emailError || contrasenaError) {
      setUserName({ ...userName, error: nameError });
      setEmail({ ...email, error: emailError });
      setContrasena({ ...contrasena, error: contrasenaError });
      return;
    }

    try {
      // Verificar si el usuario ya está registrado
      const response = await fetch(`https://backend-deploy-production-318f.up.railway.app/cliente`); // todos los usuarios
      const data = await response.json(); // convertir en json
      console.log('USER:', data);

      // Verificar si el correo electrónico ya existe
      const userWithEmail = data.find((element) => element.email === email.value);
      if (userWithEmail) {
        Alert.alert('Error', 'Ya existe un cliente con este correo electrónico.');
        console.log('Ya existe un cliente con este correo electrónico. No se creará un nuevo cliente.');
        return;
      }

      // Crear el cliente si el usuario no está registrado
      const responseCrearCliente = await fetch('https://backend-deploy-production-318f.up.railway.app/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          contrasena: contrasena.value,
          direccion: direccion.value,
          userName: userName.value,
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
        value={userName.value}
        onChangeText={(text) => setUserName({ ...userName, value: text })}
      />
      {userName.error ? <Text style={{ color: 'red' }}>{userName.error}</Text> : null}
      <PaperTextInput
        label="Email"
        value={email.value}
        onChangeText={(text) => setEmail({ ...email, value: text })}
        error={!!email.error}
      />
      {email.error ? <Text style={{ color: 'red' }}>{email.error}</Text> : null}
      <PaperTextInput
        label="Contraseña"
        secureTextEntry
        value={contrasena.value}
        onChangeText={(text) => setContrasena({ ...contrasena, value: text })}
      />
      {contrasena.error ? <Text style={{ color: 'red' }}>{contrasena.error}</Text> : null}
      <PaperTextInput
        label="Dirección"
        value={direccion.value}
        onChangeText={(text) => setDireccion({ ...direccion, value: text })}
      />
      {direccion.error ? <Text style={{ color: 'red' }}>{direccion.error}</Text> : null}
      <PaperButton mode="contained" onPress={handleSubmit}>Crear</PaperButton>
    </View>
  );
};

export default Registrar;
