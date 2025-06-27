import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, ActivityIndicator } from 'react-native';


export default function App() {
    <ImageBackground
    source={{uri:'https://images.unsplash.com/photo-1506744038136-46273834b3fb'}}
    style={StyleSheet.background}
    resizeMode='cover'
    >
        <View style={styles.overlay}>
            <Text style={styles.text}>Bienvenido a la app</Text>

        </View>
    </ImageBackground>

}
//Estilos
const styles = StyleSheet.create({
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

})