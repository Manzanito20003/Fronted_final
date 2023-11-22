import { StyleSheet } from 'react-native';

const colores = {
  blanco: '#FFFFFF',
  negro: '#000000',
  grisClaro: '#CCCCCC',
  gris: '#666666',
  azul: '#3498DB',
  verde: '#2ECC71',
  rojo: '#E74C3C',
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colores.blanco,
  },
  texto: {
    fontSize: "bold",
    color: colores.negro,
  },
  botonAzul: {
    backgroundColor: colores.azul,
    padding: 10,
    borderRadius: 5,
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold',
  },
});

export { colores, estilos };
