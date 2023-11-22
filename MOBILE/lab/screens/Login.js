// Importar las dependencias necesarias
import React, { useState, useContext } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";
import FormInput from "../componente/auth/FormInput";
import Button from "../componente/auth/Button";
import Header from "../componente/auth/Header";
import { theme } from "../core/theme";


import {
    passwordValidator,
    emailValidator
} from "../componente/auth/validators/validators";
import { AuthContext } from "../store/auth-context";
import { signin } from '../api/auth';

const Login = ({navigation}) => {
    // Estado para almacenar el valor y el error del campo de correo electrónico
    const [email, setEmail] = useState({ value: '', error: ''});
    // Estado para almacenar el valor y el error del campo de contraseña
    const [password, setPassword] = useState({ value: '', error: ''});

    // Obtener el contexto de autenticación
    const authCtx = useContext(AuthContext);

    // Función para iniciar sesión
    const login = async () => {
        // Validar el campo de correo electrónico y obtener el error, si existe
        const emailError = emailValidator(email.value);
        // Validar el campo de contraseña y obtener el error, si existe
        const passwordError = passwordValidator(password.value);

        // Si hay errores en los campos de correo electrónico o contraseña, establecer los errores y detener la función
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });

            return;
        }

        // Realizar la solicitud de inicio de sesión y obtener la respuesta
        const response = await signin({
            email: email.value,
            password: password.value
        });

        // Autenticar al usuario con el token de respuesta
        authCtx.authenticate(response.token);
    }

    return (
        <View style={styles.container}>
            <Header>Welcome back</Header>
            <FormInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <FormInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            
            <Button mode="contained" onPress={login}>Login</Button>

            <View style={styles.inline}>
                <Text style={styles.label}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('Register')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inline: {
        flexDirection: 'row',
    },
    label: {
        color: theme.colors.secondary
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
});

export default Login;
