import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { KeyboardAvoidingView, Platform, TextInput, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';
import api from '../services/api';


export default function Login({ navigation }) {
    const [user, setUser] = useState('');

    useEffect(()=> {
         AsyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('Main', { user });
            }
        })
    }, []);
    
    async function handleLogin(){
        const response = await api.post('/dev', { username: user })
       console.log(response);

       const { _id } = response.data;

       await AsyncStorage.setItem('user', _id);

        navigation.navigate('Main', { user: _id });
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === 'ios'}
            style={styles.container}
        >
            <Image source={logo} />

            <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu usuário do github"
                placeholderTextColor='#999'
                style={styles.input}
                value={user}
                onChangeText={setUser}
            />

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.text}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },

    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#Df4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        paddingHorizontal: 15
    },

    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
});