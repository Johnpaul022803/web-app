import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const MainContainer = () => {
  const navigation = useNavigation();

  const handleLesson = () => {
    navigation.navigate('LessonScreen');
  };

  const handlePlay = () => {
    navigation.navigate('AboutScreen');
  };

  const handleAboutUs = () => {
    navigation.navigate('AboutUsScreen');
  };

  return (
    <LinearGradient colors={['#a8e063', '#56ab2f']} style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={handleLesson}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>✏️</Text>
          </View>
          <Text style={styles.navText}>Lesson</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={handlePlay}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>😊</Text>
          </View>
          <Text style={styles.navText}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={handleAboutUs}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>👤</Text>
          </View>
          <Text style={styles.navText}>About Us</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#32CD32',
    borderRadius: 25,
    paddingVertical: 10,
    width: '90%',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: '#E0FFD6',
    borderRadius: 25,
    padding: 10,
    marginBottom: 5,
  },
  icon: {
    fontSize: 24,
  },
  navText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default MainContainer;
