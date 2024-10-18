import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SubScreen = () => {
  const navigation = useNavigation();
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState([]);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null); // New state for selected choice
  const [correctAnswer, setCorrectAnswer] = useState(null); // New state for correct answer

  useEffect(() => {
    generateQuestion();
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsGameOver(true);
          showScoreAlert();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    const correctAnswerValue = num1 - num2;
    setCorrectAnswer(correctAnswerValue); // Set the correct answer
    setQuestion(`${num1} - ${num2} = ?`);

    // Generate an incorrect answer that is not equal to the correct answer
    const incorrectAnswer = correctAnswerValue + Math.floor(Math.random() * 10) - 5;
    const allChoices = [correctAnswerValue, incorrectAnswer];
    const shuffledChoices = allChoices.sort(() => Math.random() - 0.5);
    setChoices(shuffledChoices);
    setSelectedChoice(null); // Reset selected choice for new question
  };

  const handleAnswer = (choice) => {
    if (!isGameOver) {
      setSelectedChoice(choice); // Set selected choice
      if (choice === correctAnswer) {
        setScore(score + 1);
      }
      setTimeout(() => {
        generateQuestion(); // Generate a new question after a short delay
      }, 1000); // Delay to show the result
    }
  };

  const showScoreAlert = () => {
    Alert.alert("Time's up!", `Your final score is: ${score}`, [{ text: "OK" }]);
  };

  return (
    <LinearGradient colors={['#ffcc00', '#ff6699']} style={styles.container}>
      <Text style={styles.score}>
        {isGameOver ? `Final Score: ${score}` : `Score: ${score}`}
      </Text>
      <Text style={styles.timer}>Time Remaining: {timeRemaining}s</Text>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.buttonContainer}>
        {choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              selectedChoice === choice && (choice === correctAnswer ? styles.correctButton : styles.incorrectButton)
            ]}
            onPress={() => handleAnswer(choice)}
            disabled={isGameOver} // Disable buttons when game is over
          >
            <Text style={styles.buttonText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 40,
    marginBottom: 20,
    marginTop: 20,
  },
  score: {
    fontSize: 50,
    marginBottom: 10,
    marginTop: 20,
  },
  question: {
    fontSize: 60,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
  },
  correctButton: {
    backgroundColor: 'green',
  },
  incorrectButton: {
    backgroundColor: 'red',
  },
});

export default SubScreen;
