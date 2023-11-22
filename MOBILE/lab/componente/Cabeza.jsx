import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Appbar, TextInput, useTheme } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export const Cabeza = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const handleSearch = () => {
    // Agrega lógica de búsqueda aquí
    console.log(`Buscar: ${searchQuery}`);
    
    // Redirige a Busqueda con el productId igual al valor de búsqueda
    navigation.navigate("Busqueda", {navigation},{ productId: searchQuery.trim() });
  };

  return (
    <Appbar.Header style={{ backgroundColor: '#e67e22' }}>
      <Appbar.Content title="Tienda" />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ backgroundColor: 'white', marginLeft: 10, width: 150 }}
          placeholder="Buscar"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <AntDesign
          name="search1"
          size={24}
          color={theme.colors.text}
          style={{ marginLeft: 10, marginRight: 10 }}
          onPress={handleSearch}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <TouchableOpacity onPress={() => navigation && navigation.navigate("Login")}>
          <AntDesign name="user" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation && navigation.navigate("MisProduct")}>
          <AntDesign name="shoppingcart" size={24} color="white" />
        </TouchableOpacity>
       
      </View>
    </Appbar.Header>
  );
};
