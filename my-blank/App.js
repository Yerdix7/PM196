  //Importaciones
  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View } from 'react-native';
  import { Button } from 'react-native-web';
  import React,{useState} from 'react';


  const Texto= ({style})=>{
    const [contenido,setContenido]=useState('Hola Mundo')
    const actualizaTexto=()=>{setContenido('State Modificado')}
    return(
      <Text style={[styles.text,style]} onPress={actualizaTexto}>  {contenido} </Text>
    )    
    }

  const Botton= ()=>{
    const [presionar,setPresiona]=useState('Presioname')
    const actualizaButton=()=>{setPresiona('Presionado-uwu')}
    return(
      <Button onPress={actualizaButton} title={presionar}>  </Button>
    )
    }

  //Main

  export default function App() {
    return (

      <View style={styles.container}>
            <StatusBar style="auto" />      

        <Texto style={styles.verde}>  </Texto>  
        <Texto style={styles.amarillo}> </Texto> 
        <Texto style={styles.azul}> </Texto>

        <Botton> </Botton>

      </View>


    );
  }
  //Estilos
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'strech',
      justifyContent: 'center',
      flexDirection:'column',
    },
    text:{
      color:'black',
      fontSize:27,
      width:100,
      height:100,
    },

    verde:{backgroundColor:'green',},
    amarillo:{backgroundColor:'yellow',},
    azul:{backgroundColor:'blue',},
  });
  
