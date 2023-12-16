import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { emailValidator, passwordValidator, textValidator } from '../auth/validators/validators';
import { TextInput as PaperTextInput, Button as PaperButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
      console.log("guardado_async",jsonValue)
    } catch (e) {
      console.log("fail async")
      // saving error
    }
  };
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');




  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError(emailValidator(text));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError(passwordValidator(text));
  };

 

  const handleCrearCuenta = () => {
    navigation.navigate("Registrar", navigation);
    console.log('yendo a crear cuenta...');
  };

  const handleLogin = async () => {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

    if (emailError || passwordError ) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      return;
    }

    try {
      const response = await fetch('https://backend-deploy-production-318f.up.railway.app/cliente');
      const data = await response.json();
      const cuentaExistente = data.find((cliente) => cliente.email === email && cliente.contrasena === password);
      console.log(cuentaExistente)

      if (cuentaExistente) {
        console.log('Inicio de sesión exitoso');
        storeData(cuentaExistente);

        // Redirigir a la página de inicio o realizar otras acciones
        navigation.navigate("Product", navigation);
      } else {
        console.log('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error al verificar la cuenta:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Iniciar sesión</Text>
      <PaperTextInput
        label="Correo electrónico"
        value={email}
        onChangeText={handleEmailChange}
        error={!!emailError}
      />
      {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
      <PaperTextInput
        label="Contraseña"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
        error={!!passwordError}
      />
      {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}
      <PaperButton mode="contained" onPress={handleLogin} style={{ marginTop: 20 }}>
        Iniciar sesión
      </PaperButton>
      <PaperButton onPress={handleCrearCuenta} style={{ marginTop: 10 }}>
        Crear cuenta
      </PaperButton>
    </View>
  );
};

export default Login;
