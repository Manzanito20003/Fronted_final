import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Cabeza } from './Cabeza';
import Carrito from './Carrito';
import axios from 'axios';

export const Busqueda = ({ route }) => {
  const { navigation, productId } = route.params;
  const [obj, setObj] = useState(undefined);

  useEffect(() => {
    function sacarObjPorId() {
      axios.get(`https://backend-deploy-production-318f.up.railway.app/producto/${productId}`)
        .then(response => {
          setObj(response.data);
          console.log("Se obtuvo correctamente la data del objeto");
        })
        .catch(error => {
          console.error("Fallo al obtener la data del objeto", error);
        });
    }

    sacarObjPorId();
  }, [productId]);

  return (
    <View style={styles.container}>
      <Cabeza navigation={navigation} />

      {obj && (
        <View style={styles.productoContainer}>
          <Image source={{ uri: obj.img }} style={styles.image} />
          <Text style={styles.nombre}>{obj.nombre}</Text>
          <Text style={styles.texto}>Fabricante: {obj.fabricante}</Text>
          <Text style={styles.texto}>Precio: {obj.precio}</Text>
          <Text style={styles.texto}>Stock: {obj.stock}</Text>
          <Text style={styles.disponibilidad}>
            {obj.disponible ? 'Sin producto disponible':'Disponible' }
          </Text>
        </View>
      )}

      <Carrito item={obj} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  productoContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  texto: {
    fontSize: 16,
    marginBottom: 4,
  },
  disponibilidad: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009688',
    marginTop: 8,
  },
});
