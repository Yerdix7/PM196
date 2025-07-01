import { Alert, View, Text, Button, StyleSheet, Platform } from "react-native";
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, SafeAreaView, Platform } from "react-native";
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, ActivityIndicator } from 'react-native';





const App = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");



    const mostrarAlerta = () =>{
        if (!nombre  || !email){
            if(Platform.OS === "web"){
                window.alert("Por favor, completa toddos los campos obligatorios");
            }else{
                Alert.alert(
                    "Error",
                    "Por favor, complete todos los campos obligatotios",
                    [{text: "OK"}]
                );
            }
        }else{
            if (Platform.OS === "web"){
                window.alert(`registro exitoso \n Nombre:${nombre}\n Email:${email}`);
                limpiarFormulario();
            }else{
                Alert.alert(
                    "Registro exitoso",
                    `Nombre: ${nombre}\nEmai: ${email}`,
                    [{text:"ok", onPress:()=>limpiarFormulario()}]
                )
            }
        }
    };


    const limpiarFormulario = () =>{
        setNombre("");
        setEmail("");
    };



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formulario}>
                <Text style={styles.titulo}>Registro de usuario</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Nombre Completp * "
                  value={nombre}
                  onChangeText={setNombre}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Email * "
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <Button title="Registrase" onPress={mostrarAlerta}/>
            </View>

        </SafeAreaView>

  );


       <ImageBackground
    source={{uri:'https://images.unsplash.com/photo-1506744038136-46273834b3fb'}}
    style={StyleSheet.background}
    resizeMode='cover'
    >
        <View style={styles.overlay}>
            <Text style={styles.text}>Bienvenido a la app</Text>

        </View>
    </ImageBackground>

};












const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        padding: 20,
    },
    formulario:{
        backgroundColor: "#f5f5f5",
        padding: 20,
        borderRadius:10,
    },
    titulo:{
        fontSize:20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign:"center",
    },
    input:{
        height: 40,
        borderColor:"gray",
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal:10,
        borderRadius: 5,
        backgroundColor:"white",
    },

        background: {
        flex:1,
        justifycontent: 'center'
    },
    overlay:{
        backgroundColor: 'rgba(0,0,0,0.5',
        padding: 20,
        borderRadius: 10,
        alignSelf: 'center'
    },
    text: {
        color: 'white',
        fontSice: 24
    }

    
});


export default App;