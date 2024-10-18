import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import AboutScreen from './app/screens/AboutScreen';
import HomeScreen from './app/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="ABOUT" component={AboutScreen} />
        <Stack.Screen name="HOME" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;