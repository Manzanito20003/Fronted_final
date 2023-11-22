import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Cabeza } from './Cabeza';
import Carrito from './Productos/Carrito';

export const Busqueda = ({ route }) => {
  const { navigation, productId } = route.params;
  console.log(productId);
  // Resto del código...

  return (
    <View style={styles.container}>
      <Cabeza navigation={navigation} />
      <Card>
        <Card.Cover source={{ uri: `https://picsum.photos/id/${productId }/200/300` }} />
        <Card.Content>
          <Title>Título de la tarjeta</Title>
          <Paragraph>Descripción de la tarjeta o cualquier otro contenido relacionado.</Paragraph>
        </Card.Content>
      </Card>
      <View>
        <Carrito id={productId}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
