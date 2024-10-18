import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();
  
  const handleMulti = () => {
    navigation.navigate("MULTI"); 
  };
  const handleDivi = () => {
      navigation.navigate("DIVI"); 
  };
  const handleAddi = () => {
    navigation.navigate("ADDI"); 
  };
  const handleSub = () => {
    navigation.navigate("SUB");
    };
  return (
    <LinearGradient colors={['#a8e063', '#56ab2f']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Learn Math Today</Text>
      </View>
      <Text style={styles.lessonsTitle}>LESSONS</Text>
      <TouchableOpacity 
        style={[styles.button, styles.multiplication]} 
        onPress={handleMulti} >
        <Text style={styles.buttonText}>MULTIPLICATION</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.division]}
      onPress={handleDivi} >
        <Text style={styles.buttonText}>DIVISION</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.addition]}
      onPress={handleAddi}>
        <Text style={styles.buttonText}>ADDITION</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.subtraction]}
      onPress={handleSub}>
        <Text style={styles.buttonText}>SUBTRACTION</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.countingNumbers]}>
        <Text style={styles.buttonText}>COUNTING NUMBERS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.guessShape]}>
        <Text style={styles.buttonText}>GUESS THE SHAPE</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lessonsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: 200,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  multiplication: {
    backgroundColor: '#ff6347',
  },
  division: {
    backgroundColor: '#fafad2',
  },
  addition: {
    backgroundColor: '#ffb6c1',
  },
  subtraction: {
    backgroundColor: '#f0e68c',
  },
  countingNumbers: {
    backgroundColor: '#b19cd9',
  },
  guessShape: {
    backgroundColor: '#f4a460',
  },
});

export default AboutScreen;