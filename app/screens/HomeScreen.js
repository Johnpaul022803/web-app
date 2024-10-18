import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();

    const handleSignIn = () => {
        // Here you would typically handle the sign-in logic (e.g., API call)
        console.log("Create Account button pressed");
        navigation.navigate("ABOUT"); // Navigate to About screen after creating account
    };

    const handleSignUp = () => {
        navigation.navigate("HOME"); // Navigate to Home screen
    };

    return (
        <LinearGradient colors={['#8BD68E', '#28D039']} style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>KUMON nahLEDGE</Text>
                <Image
                    source={require('../assets/favicon.png')} // Ensure the path to your logo is correct
                    style={styles.logo}
                />
                <Text style={styles.subtitle}>Learn Math Today</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.signInText}>Create New Account</Text>
                <View style={styles.inputGroup}>
                    <InputField label="Full Name" placeholder="John Doe" />
                    <InputField label="Email Address" placeholder="learnmath221@gmail.com" />
                    <InputField label="Password" placeholder="***************" secureTextEntry={true} />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const InputField = ({ label, placeholder, secureTextEntry }) => (
    <View style={styles.inputWrapper}>
        <Text>{label}</Text>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        gap: 50,
    },
    headerContainer: {
        height: 200, // Set a fixed height for the header
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        gap: 20, // Reduced gap for a more compact look
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 30,
    },
    logo: {
        height: 100, // Reduced logo height
        width: 100, // Reduced logo width
    },
    subtitle: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 40,
        gap: 1,
        fontStyle: 'italic',
    },
    formContainer: {
        marginTop: 20, // Adjusted margin for form container
    },
    signInText: {
        fontSize: 30, // Reduced font size for a more compact look
        fontWeight: '700',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    inputGroup: {
        gap: 12,
        marginTop: 12,
        fontSize: 12,
    },
    inputWrapper: {
        gap: 6,
    },
    input: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#0021F8', // Change this to your preferred button color
        borderRadius: 50,
        paddingVertical: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});