import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const image = require('./assets/image.png');

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const recuperarContraseña = () => {};
  const crearCuenta = () => {};
  const ingresar = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Login App (Apellido, Apellido)</Text>
      </View>

      <Image source={image} style={styles.image} resizeMode="contain" />

      <TextInput
        placeholder="Correo Electrónico"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password}
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity onPress={ingresar} style={styles.button}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={recuperarContraseña}>
        <Text style={styles.linkText}>¿Olvidaste la clave?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={crearCuenta}>
        <Text style={styles.linkText}>Crear Cuenta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    backgroundColor: '#8A2BE2',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 100,
    marginBottom: 30,
  },
  input: {
    width: 300,
    height: 45,
    borderColor: '#8A2BE2',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#B266FF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
    width: 300,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#000',
    fontSize: 14,
    marginTop: 5,
  },
});