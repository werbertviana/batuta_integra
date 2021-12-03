import React, { Component, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';

//import api
import api from '../../services/Api';



export default function App() {

    /*useEffect(() => {
        listar();
    })

     function listar() {
        try {
            const response =  api.get('/feeds')
            console.log(response.data)
        } catch(error){
            console.log(error)
        }
    }
    */

    api.get("/allfeeds").then((response) => {
        console.log(response.data);
    });
    


    return (
        <SafeAreaView>
            <Text>TESTE</Text>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }

});



