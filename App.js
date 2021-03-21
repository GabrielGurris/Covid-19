import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function App() {
  return (

    <View style={styles.container}>
      <LinearGradient colors={['#26fff1', '#16ffc9', '#26fff1']} style={styles.linearGradient}>
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.h1}>COVID-19</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.p1}>Este APP foi desenvolvido para informá-lo sobre a situação epidemiológica da COVID-19 no mundo.</Text>
            <Button title='Dados atuais' style={styles.btn}/>
          </View>
          <View style={styles.footer}>
            <Text style={styles.p2}>Stay home</Text>
            <Text style={styles.p2}>Stay safe</Text>
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
    fontWeight: 'bold',
    fontSize: 50,
    color: '#D2691E',
  },
  p1: {
    color: 'red', 
    fontSize: 28, 
    textAlign: 'center'
  },
  p2: {
    color: 'red', 
    fontSize: 22, 
    textAlign: 'center'
  }
});
