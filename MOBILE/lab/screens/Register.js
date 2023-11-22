import React, { useContext, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
  } from "react-native";

import FormInput from "../componente/auth/FormInput"
import Header from "../componente/auth/Header"
import Button from "../componente/auth/Button";
import { theme } from "../core/theme";
import {
    textValidator,
    passwordValidator,
    emailValidator
} from "../componente/auth/validators/validators";
import { AuthContext } from "../store/auth-context";

import { signup } from '../api/auth';

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState({ value: '', error: '' });
    const [lastname, setLastname] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const authCtx = useContext(AuthContext);


    const signUp = async () => {
        const nameError = textValidator(name.value);
        const lastnameError = textValidator(lastname.value);
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value)

        if (nameError || lastnameError || emailError || passwordError) {
            setName({ ...name, error: nameError });
            setLastname({ ...lastname, error: lastnameError });
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });

            return;
        }

        const response = await signup({
            firstName: name.value,
            lastName: lastname.value,
            email: email.value,
            password: password.value,
            admin: false
        })

        authCtx.authenticate(response.token)
    }

    return (
        <View style={styles.container}>
            <Header>Create an account</Header>
        
            <FormInput
                label="First Name"
                returnKeyType="next"
                value={name.value}
                onChangeText={text => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
            />

            <FormInput
                label="Last Name"
                returnKeyType="next"
                value={lastname.value}
                onChangeText={text => setLastname({ value: text, error: '' })}
                error={!!lastname.error}
                errorText={lastname.error}
            />

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

            <Button mode="contained" onPress={signUp}>
                Register
            </Button>

            <View style={styles.inline}>
                <Text style={styles.label}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('Login')}>
                    <Text style={styles.link}>Login</Text>
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

export default RegisterScreen;
