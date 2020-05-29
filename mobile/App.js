import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Quiz App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0353A4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});