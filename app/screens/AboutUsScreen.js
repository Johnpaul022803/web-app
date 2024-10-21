import { Button, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const AboutUsScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient colors={['#8BD68E', '#28D039']} style={styles.gradient}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.welcome}>WELCOME to Kumon nahLEDGE!</Text>
        <Text style={styles.text}>
          Kumon nahLedge is designed to make learning math fun and engaging for elementary students. Our app offers interactive activities that build foundational math skills through playful challenges and exercises. With an easy-to-use interface and colorful design, children will enjoy exploring numbers, counting, addition, and subtraction at their own pace. Whether your child is just beginning their math journey or needs extra practice, Kumon nahLedge is here to support their learning every step of the way!
        </Text>
        <Image 
          source={require('../assets/favicon.png')} 
          style={styles.logo} 
        />
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  gradient: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6347',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AboutUsScreen;
