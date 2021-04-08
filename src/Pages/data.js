import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppBar from '../Components/appBar';

export default function Data() {

  const Route = useRoute();

  const {title, confirmed, recovered, deaths, updated} = Route.params;

  const date = new Date(updated);

  const formated = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth()+1).toString().padStart(2, "0")}/${date.getFullYear()} às ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  
  return (
    <>
      <AppBar/>
        <View style={styles.container}>
          <LinearGradient colors={['black', 'red']} start={{ x: 0.9, y: 0.4 }} end={{ x: 1, y: 1 }} style={styles.linearGradient}>
            <View style={{ flex: 1 }}>
              <Text style={styles.h1}>{title}</Text>
              <Text style={styles.h2}>Casos confirmados {'\n'}{confirmed}</Text>
              <Text style={styles.h2}>Pessoas recuperadas {'\n'}{recovered}</Text>
              <Text style={styles.h2}>Mortes confirmadas{'\n'}{deaths}</Text>
              {updated && <Text style={styles.footer}>Atualizado em: {formated}</Text>}
            </View>
          </LinearGradient>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  h1: {
    textAlign: 'center',
    fontSize: 48,
    padding: 8,
    color: 'black',
    marginTop: 50,
    marginBottom: 25,
    borderRadius: 50,
    backgroundColor: '#cc0000'
  },
  h2: {
    textAlign: 'center',
    fontSize: 24,
    padding: 14,
    color:'red',
    marginTop: 14
  },
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
    justifyContent: 'center'
  },
  footer: {
    fontSize: 20,
    padding: 16,
    color:'black',
    textAlign: 'center',
    marginTop: 150
  }
});
