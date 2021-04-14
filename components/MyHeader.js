import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const MyHeader = props => {
    return (
        <SafeAreaProvider>
            <Header
                centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize: 20, fontWeight: "bold", } }}
                backgroundColor="#eaf8fe"
            />
        </SafeAreaProvider>
    );
};

export default MyHeader;