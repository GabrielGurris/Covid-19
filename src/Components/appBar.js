import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

const appBar = () => {
    const Navigation = useNavigation();

    return (
    <Appbar>
        <Appbar.Header>
            <Appbar.BackAction onPress={() => { Navigation.goBack() }} />
        </Appbar.Header>
    </Appbar>
)};

export default appBar;