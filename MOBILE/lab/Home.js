import React from 'react';
import { TouchableOpacity, View ,Text} from 'react-native';
import { Cabeza } from './componente/Cabeza';
import Barra_lateral from './componente/Barra_lateral';


export const Home = ({ navigation }) => {
  const handlePress = () => {
    // Navegar a otra pantalla
    navigation.navigate('Product');
  };
  return (
    <View>
      <Barra_lateral></Barra_lateral>
      <TouchableOpacity onPress={handlePress}></TouchableOpacity>
      <Cabeza navigation={navigation} />
    </View>
  );
};
