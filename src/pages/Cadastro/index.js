import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const [username, setUsername] = useState('');
  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handlerRegistro = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'A senha não corresponde');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3308/system_ponto/registro', {
        nome: username,
        matricula,
        senha: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        Alert.alert('Registrado com sucesso', 'Welcome, ' + response.data.message);
        navigation.navigate('Home');
      } else {
        Alert.alert('Registro falhou', response.data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao registrar. Por favor, tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Registro</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.title}>Matricula</Text>
        <TextInput
          placeholder="Matricula"
          style={styles.input}
          value={matricula}
          onChangeText={setMatricula}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.title}>Confirmar Senha</Text>
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handlerRegistro}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
  },
  containerHeader: {
    marginTop: '18%',
    marginBottom: '8%',
    paddingStart: '10%',
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginTop: 12,
    fontSize: 17,
  },
  button: {
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogin: {
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
