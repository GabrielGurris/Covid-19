import * as React from 'react';
import { Appbar } from 'react-native-paper';

const appBar = () => (
    <Appbar>
        <Appbar.Header>
            <Appbar.BackAction onPress={() => { }} />
        </Appbar.Header>
    </Appbar>
);

export default appBar;