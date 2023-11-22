import * as React from 'react';
import { View, Text } from 'react-native';
import { Drawer } from 'react-native-paper';

const BarraLateral = () => {
  return (
    <Drawer.Section>
      <Drawer.Item
        label="Inicio"
        icon="home"
        onPress={() => console.log('Ir a la pantalla de inicio')}
      />
      <Drawer.Item
        label="Perfil"
        icon="account"
        onPress={() => console.log('Ir a la pantalla de perfil')}
      />
      {/* Agrega más elementos según sea necesario */}
    </Drawer.Section>
  );
};

export default BarraLateral;
