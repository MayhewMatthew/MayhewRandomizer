//imports
import React, {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {

  const [numero, setNumero] = useState(0)

  function handleNumero(){
    
    const new_number = Math.floor(Math.random() * 1000)

    setNumero(new_number)
  }

  return( 
    <SafeAreaView style = {style.container}>
      <Text style = {style.fontNumber}>{numero}</Text>
      <TouchableOpacity onPress = {handleNumero} style = {style.buttonDesign}>
        <Text style = {style.fontButton}>Gerar número</Text>
      </TouchableOpacity>       
    </SafeAreaView>    
  );
};

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontButton:{
    color: 'lightyellow',
    fontWeight: 'bold',    
    fontSize: 32,   
  },
  fontNumber:{
    color: 'lightyellow',
    fontWeight: 'bold',    
    fontSize: 110,   
  },
  buttonDesign:{
    backgroundColor: 'lightgreen',
    width: '78%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 78,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;