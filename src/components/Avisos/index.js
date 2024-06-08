import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Avisos() {
  const [avisoData, setAvisoData] = useState([
    {
      date: '',
      text: '',
    },
  ]);
  const [selectedAvisoIndex, setSelectedAvisoIndex] = useState(null);

  const handlePress = (index) => {
    setSelectedAvisoIndex(index);
  };

  const handleAddAviso = () => {
    setAvisoData([...avisoData, { date: '', text: '' }]);
  };

  const handleDateChange = (index, value) => {
    const newAvisoData = [...avisoData];
    newAvisoData[index].date = value;
    setAvisoData(newAvisoData);
  };

  const handleTextChange = (index, value) => {
    const newAvisoData = [...avisoData];
    newAvisoData[index].text = value;
    setAvisoData(newAvisoData);
  };

  return (
    <View style={styles.container}>
      {avisoData.map((aviso, index) => (
        <View key={index} style={styles.aviso}>
          <TextInput
            style={styles.dateInput}
            value={aviso.date}
            onChangeText={(value) => handleDateChange(index, value)}
            placeholder="Data"
          />
          <TextInput
            style={styles.textInput}
            value={aviso.text}
            onChangeText={(value) => handleTextChange(index, value)}
            placeholder="Texto"
          />
          <TouchableOpacity style={styles.button} onPress={() => handlePress(index)}>
            <Text style={styles.buttonText}>{selectedAvisoIndex === index ? 'Ocultar' : 'Mostrar'}</Text>
          </TouchableOpacity>
          {selectedAvisoIndex === index && (
            <Text style={styles.text}>{aviso.text}</Text>
          )}
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={handleAddAviso}>
        <Text style={styles.addButtonText}>Adicionar aviso</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 10,
  },
  aviso: {
    marginVertical: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  dateInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});