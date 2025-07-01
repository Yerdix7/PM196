import React, { useState, useEffect } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Switch,
  Image,
  Platform,
} from "react-native";

const App = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Simula carga de logo durante 2 segundos
    setTimeout(() => setCargando(false), 2000);
  }, []);

  const mostrarAlerta = () => {
    if (!nombre || !email) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert("Error", "Debes aceptar los términos y condiciones.");
      return;
    }

    Alert.alert(
      "Registro Exitoso",
      `Nombre: ${nombre}\nCorreo: ${email}`,
      [{ text: "OK", onPress: limpiarFormulario }]
    );
  };

  const limpiarFormulario = () => {
    setNombre("");
    setEmail("");
    setAceptaTerminos(false);
  };

  if (cargando) {
    return (
      <View style={styles.cargando}>
        <Image
          source={require("./assets/logo.png")} // Asegúrate de tener el logo aquí
          style={styles.logo}
        />
        <Text style={styles.textoCargando}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      }}
      style={styles.fondo}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.contenedor}>
        <View style={styles.formulario}>
          <Text style={styles.titulo}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo *"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrón
