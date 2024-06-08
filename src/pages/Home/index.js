import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from '../../components/Header';
//import Balance from '../../components/Balance';
import Actions from '../../components/Actions';
import Avisos from '../../components/Avisos';

export default function Home(){

  const [user, setUser] = useState({})

  useEffect(()=>{
    const matri = ()=> { 
      axios.get('http://localhost:3308/system_ponto/registro')
    .then((response)=> {
      setUser(response.data[0])
      console.log(user)
    })
    .catch(()=>{
      console.log(err)
    })
    matri()
  }},[]);
  return (
    <View style={styles.container}>

      <Header name={user.id_usuario}/>

      <Actions/>

      <Text style={styles.title}>Quadro de Avisos!</Text>

      <Avisos/>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  }
});