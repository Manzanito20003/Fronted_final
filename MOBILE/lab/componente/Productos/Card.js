import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper/src";
import Carrito from "../Menu/Carrito";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
  // Contenedor principal
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    // Centra los elementos horizontalmente
  },

  // Estilo para el texto
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    alignItems: "flex-end",
    margin:4,
    marginLeft:15
  },

  // Estilo para la tarjeta (caja_card)
  caja_card: {
    width: 388,
    height: 200,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#ddd",
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    // Estilos de sombra para la tarjeta
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5, // Elevación en Android para la sombra
  },

  // Estilo para el texto del botón
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },

  // Estilo para la imagen
  img: {
    width: "60%", // Ocupa el 100% del contenedor
    height: 100,
    position: "absolute",
    top: 50, // Cambia el valor para mover verticalmente
    left: 150, // Cambia el valor para mover horizontalmente
    marginBottom: 20,
    flexDirection: "column-reverse",
    borderRadius: 10,
  },

  // Estilo para el contenedor del botón
  buttonContainer: {
    marginTop: 20,
  },
});

const Card = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    fetch("https://backend-deploy-production-318f.up.railway.app/producto")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setData1(data.slice(0, data.length / 3));
        setData2(data.slice(data.length / 3, (2 * data.length) / 3));
        setData3(data.slice((2 * data.length) / 3));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Swiper style={{ height: 250 }} loop={false} showsButtons={false}>
        {data1.map((item) => (
          <View key={item.id} style={[styles.caja_card, { borderWidth: 5, borderColor: "red" }]}    >
            <Text style={styles.text}> {item.nombre}</Text>
            <Text style={styles.text}> ${item.precio}</Text>

            <Image source={{ uri: item.img }} style={styles.img} />

            <View style={{ flexDirection:"row-reverse",justifyContent:"space-between" ,width:"100%" ,height:"10" ,marginTop:60 ,borderWidth:5,borderColor:"red"}}>
              {" "}
              {/* Colocar el componente Carrito aquí */}
              <Carrito item={item} />

              {/* Colocar el botón aquí */}
              <TouchableOpacity
                style={{ margin:10 }}
                onPress={() =>
                  navigation.navigate("Busqueda", {
                    navigation: navigation,
                    productId: item.id,
                  })
                }
              >
                <AntDesign name="infocirlceo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Swiper>

      <Swiper style={{ height: 250 }} loop={true} showsButtons={true}>
        {data2.map((item) => (
          <View key={item.id} style={styles.caja_card}>
          <Text style={styles.text}> {item.nombre}</Text>
          <Text style={styles.text}> ${item.precio}</Text>

          <Image source={{ uri: item.img }} style={styles.img} />

          <View style={{ flexDirection: "row" ,width:800 ,height:800 ,marginTop:60}}>
            {" "}
            
            {/* Colocar el componente Carrito aquí */}
            <Carrito item={item} />
            {/* Colocar el botón aquí */}
            <TouchableOpacity
              style={{ margin: 10 }}
              onPress={() =>
                navigation.navigate("Busqueda", {
                  navigation: navigation,
                })
              } 
              id={item.id}
            >
              <AntDesign name="infocirlceo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        ))}
      </Swiper>

      <Swiper
        style={{ height: 250 }}
        loop={false}
        showsButtons={true}
        nextButton={<Text style={styles.buttonText}>Next</Text>}
        prevButton={<Text style={styles.buttonText}>Prev</Text>}
      >
        {data3.map((item) => (
          <View key={item.id} style={styles.caja_card}>
          <Text style={styles.text}> {item.nombre}</Text>
          <Text style={styles.text}> ${item.precio}</Text>

          <Image source={{ uri: item.img }} style={styles.img} />

          <View style={{ flexDirection: "row" ,width:800 ,height:800 ,marginTop:60}}>
            {" "}
            {/* Colocar el componente Carrito aquí */}
            <Carrito item={item} />
            {/* Colocar el botón aquí */}
            <TouchableOpacity
              style={{ margin:10}}
              onPress={() =>
                navigation.navigate("Busqueda", {
                  navigation: navigation,
                  productId: item.id,
                })
              }
            >
              <AntDesign name="infocirlceo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        ))}
      </Swiper>
    </ScrollView>
  );
};

export default Card;
