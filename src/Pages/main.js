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

    return (
        <>
            <AppBar />
            <View style={styles.container}>
                <LinearGradient colors={['black', 'red']} start={{ x: 0.9, y: 0.4 }} end={{ x: 1, y: 1 }} style={styles.linearGradient}>
                    <ScrollView style={styles.center}>
                        {
                            Object.entries(info).map(n => {

                                const name = n[0] !== "All" ? n[0] : "Brasil";

                                return (
                                    <Cities name={name} key={n[0]} onPress={() => {
                                        Navigation.navigate("Data",
                                            {
                                                title: name,
                                                confirmed: n[1].confirmed,
                                                recovered: n[1].recovered,
                                                deaths: n[1].deaths,
                                                updated: n[1].updated
                                            })
                                    }} ></Cities>)
                            })
                        }
                    </ScrollView>
                </LinearGradient>
            </View>
        </>
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
