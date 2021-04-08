import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Cities = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
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