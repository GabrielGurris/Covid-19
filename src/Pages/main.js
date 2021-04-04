import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Api from '../Services/api';
import Cities from '../Components/cities';
import AppBar from '../Components/appBar';

export default function Data() {
    const Navigation = useNavigation();

    const [info, setInfo] = useState({});

    useEffect(() => {
        Api.get("/cases?country=Brazil").then(response => setInfo(response.data));
    }, [])

    console.log(Object.entries(info).map(n => n[0]));

    return (
        <View style={styles.container}>
        <AppBar />  
            <LinearGradient colors={['black', 'red']} start={{x: 0.9, y: 0.4}} end={{x: 1, y: 1}} style={styles.linearGradient}>
                <ScrollView style={styles.center}>
                    {
                        Object.entries(info).map(n => <Cities name={n[0]} key={n[0]} ></Cities>)
                    }
                </ScrollView>
                <Button title="Voltar" onPress={() => { Navigation.goBack() }}></Button>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        flex: 1,
    }
});
