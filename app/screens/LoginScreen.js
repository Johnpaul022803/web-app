import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

    const LoginScreen =  () => {
        const navigation = useNavigation();
        const handleAbout = () => {
            navigation.navigate("ABOUT");
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
                <Text style={styles.signInText}>Sign In To Your Account</Text>
                <View style={styles.inputGroup}>
                    <InputField label="Email Address" placeholder="learnmath221@gmail.com" />
                    <InputField label="Password" placeholder="***************" secureTextEntry={true} />
                </View>
                
                <TouchableOpacity style={styles.Loginbutton}
                 onPress={handleAbout}>
                    <Text style={styles.LoginbuttonText}>Login In</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>Or</Text>
                
                <TouchableOpacity style={styles.Signupbutton} onPress={handleSignUp}>
                    <Text style={styles.SignupbuttonText}>Sign Up</Text>
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
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 30,
    },
    logo: {
        height: 100,
        width: 100,
    },
    subtitle: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 40,
        gap: 1,
        fontStyle: 'italic',
    },
    formContainer: {
        marginTop: 20,
    },
    signInText: {
        fontSize: 30,
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
    Loginbutton: {
        backgroundColor: '#000000',
        borderRadius: 50,
        paddingVertical: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    LoginbuttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    Signupbutton: {
        backgroundColor: '#000000',
        borderRadius: 50,
        paddingVertical: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    SignupbuttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        color: '#fff', // Set the color of "Or" to white
        textAlign: 'center',
        marginTop:  12,
        fontSize: 20,
        fontWeight: 'bold', // Adjust the font size as needed
    },
});
export default LoginScreen;