/* import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import Perfil from './componente/Login/Perfil'; 
import { Busqueda } from "./componente/Menu/Busqueda";
import { MisProduct } from "./componente/Productos/MisProduct";

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Busqueda" component={Busqueda} /> 
      <Tab.Screen name="MisProduct" component={MisProduct} /> 
      <Tab.Screen name="Perfil" component={Perfil} />    
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
 */