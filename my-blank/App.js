//Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import React,{useState} from 'react';


const Texto= ()=>{
  const [contenido,setContenido]=useState('Hola Mundo')
  const actualizaTexto=()=>{setContenido('State Modificado')}
  return(
    <Text onPress={actualizaTexto}>  {contenido} </Text>
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

      <Texto> </Texto>  
      <Texto> </Texto> 
      <Texto> </Texto>

      <Botton> </Botton>

    </View>


  );
}
//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
