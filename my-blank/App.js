//Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const Texto= (props)=>{
  const {contenido}=props
  return(
    <Text> {contenido} </Text>
  )    
  }

//Main

export default function App() {
  return (

    <View style={styles.container}>
          <StatusBar style="auto" />      

      <Texto contenido="hola"> </Texto>  
      <Texto contenido="Mundo"> </Texto> 
      <Texto contenido="React Native"> </Texto>

      <Button title="Presioname"/>

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
