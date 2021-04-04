import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Api from '../Services/api';

export default function Data() {

    const Navigation = useNavigation();

    const [info, setInfo] = useState({});

    useEffect(() => {
        Api.get("/cases?country=Brazil").then(response => setInfo(response.data));
    },[])

    console.log(info?.['Sao Paulo']?.confirmed);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#26fff1', '#16ffc9', '#26fff1']} style={styles.linearGradient}>
        <View style={{ flex: 1 }}> 
          <Text>{info?.['Sao Paulo']?.confirmed}</Text>
          <Button title="Voltar" onPress={() => {Navigation.goBack()}}></Button>
        </View>
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
  }
});
