import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './componente/Login/Login';
import { Productos } from './componente/Productos/Productos';
import { MisProduct } from './componente/Productos/MisProduct';
import Registrar from './componente/Login/Registrar';
import { Busqueda } from './componente/Menu/Busqueda';
import Perfil from './componente/Login/Perfil';
import C_Image from './componente/Image/C_Image';
import C_galeria from './componente/Image/C_galeria';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerMode: 'screen' }}>
        <Stack.Screen name="Product" component={Productos} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Busqueda" component={Busqueda} />
        <Stack.Screen name="MisProduct" component={MisProduct} />
        <Stack.Screen name="Registrar" component={Registrar} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: true }} />
        <Stack.Screen name="camara" component={C_Image} />
        <Stack.Screen name='C_galeria' component={C_galeria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
