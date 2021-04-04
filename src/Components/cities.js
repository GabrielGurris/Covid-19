import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Cities = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.country}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    country: {
      width: 50,
      height: 50
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'black',
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 100,
        padding: 14,
        marginBottom: 14,
        marginTop: 14,
    },
    text: {
        paddingHorizontal: 10,
        fontSize: 24,
        color: 'red'
    }
  });

export default Cities;