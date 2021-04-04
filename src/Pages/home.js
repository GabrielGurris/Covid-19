import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Home() {

  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient colors={['black', 'red']} start={{x: 0.9, y: 0.4}} end={{x: 1, y: 1}} style={styles.linearGradient}>
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.h1}>COVID-19</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.p1}>Este APP foi desenvolvido para informá-lo sobre a situação epidemiológica da COVID-19 no Brasil.</Text>
            <TouchableOpacity onPress={() => { Navigation.navigate("Main") }} style={styles.btn}>
              <Text style={styles.p1}>Tempo real</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.p2}>#StayHome</Text>
            <Text style={styles.p2}>#StaySafe</Text>
          </View>
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
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  h1: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 50
  },
  p1: {
    color: 'red',
    fontSize: 28,
    textAlign: 'center'
  },
  p2: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center'
  },
  btn: {
    width: 180,
    height: 100,
    borderRadius: 25,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
