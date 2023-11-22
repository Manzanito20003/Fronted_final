import React from 'react';
import { Home } from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './componente/Login';
import { Productos } from './componente/Productos/Productos';
import { MisProduct } from './componente/Productos/MisProduct';
import Registrar from './componente/Registrar';
import { Busqueda } from './componente/Busqueda';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Product' headerMode="screen">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Productos} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Busqueda" component={Busqueda} /> 
        <Stack.Screen name="MisProduct" component={MisProduct} />    
        <Stack.Screen name="Registrar" component={Registrar} />    

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
