import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const image = require('./assets/image.png');

export default function App() {
  const [text, setText] = useState("");
  
  const recuperarContraseña = () => {

  }

  const crearCuenta = () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>Login App Aguilera Aguilera</Text>
      </View>
      <View>
        <Image source={image} style={styles.image} resizeMode='cover'></Image>
        <TextInput placeholder="Correo Electronico" onChangeText={(newText) => setText(newText)} defaultValue={text} style={styles.input} />
        <TextInput placeholder="Contraseña" onChangeText={(newText) => setText(newText)} defaultValue={text} style={styles.input} />
        <TouchableOpacity onPress={recuperarContraseña} style={styles.button}/><Text>Olvidaste la clave?</Text><TouchableOpacity/>
        <TouchableOpacity onPress={crearCuenta} style={styles.button}/><Text>Crear Cuenta</Text><TouchableOpacity/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
