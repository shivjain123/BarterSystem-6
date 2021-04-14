import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import MyHeader from '../components/MyHeader';

import db from '../config';
import firebase from 'firebase';

export default class ExchangeScreen extends Component{
    constructor(){
    super();
        this.state={
            emailId: firebase.auth().currentUser.email,
            itemName : '',
            description : ''
        }
    }

    createUniqueId() {
        return Math.random().toString(36).substring(7);
    }

    addItem = (itemName, description) => {
        var emailId = this.state.emailId
        db.collection("exchange_requests").add({
            "email_Id" : emailId,
            "item_name" : itemName,
            "description" : description,
            "exchange_id": this.createUniqueId()
        })
        this.setState({
            itemName : '',
            description : ''
        })

        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text: Ok, onPress : () => {
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        );
    }

    render(){
        return(
            <View style={{ flex: 1 }}>
                <MyHeader title="Add Item" />
                <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput
                            style={styles.box}
                            placeholder={"Item Name"}
                            onChangeText={(text) => {
                                this.setState({
                                    itemName: text
                                })
                            }}
                            value={this.state.itemName}
                        />
                        <TextInput
                            multiline
                            numberOfLines={4}
                            style={[styles.box, { height: 100 }]}
                            placeholder={"Description"}
                            onChangeText={(text) => {
                                this.setState({
                                    description: text
                                })
                            }}
                            value={this.state.description}
                        />
                    <TouchableOpacity 
                    style={styles.button}
                    onPress = {()=> {this.addItem(this.state.itemName, this.state.description)}}
                    >
                    <Text style = {styles.buttonText}> Add Item </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        width: "75%",
        height: 35,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    },
    button: {
        width: "75%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#ff5722",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    buttonText: {
        color: '#ffff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})