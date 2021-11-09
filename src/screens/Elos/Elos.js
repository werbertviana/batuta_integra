//import bibliotecas
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

//import imagens
import ferro from '../../assets/imgs/Elos/ferro.png';
import bronze from '../../assets/imgs/Elos/bronze.png';
import foto02 from '../../assets/imgs/Elos/02.png';
import foto03 from '../../assets/imgs/Elos/03.png';
import titulo from '../../assets/imgs/Elos/sistemaElos.png';

//import estilos
import {
    DivisorLine2
} from '../../components/style'

export default function Elos() {

    const [elo, setElo] = useState('ferro')

    const Elo = () => {
        if (elo == 'ferro') {
            return (
                <SafeAreaView style={{ height: '20%', width: '100%' }}>
                    <FastImage source={ferro} style={{ height: '100%', width: '100%' }}></FastImage>
                </SafeAreaView>
            )
        }

        if (elo == 'bronze') {
            return (
                <SafeAreaView style={{ height: '20%', width: '100%' }}>
                    <FastImage source={bronze} style={{ height: '100%', width: '100%' }}></FastImage>
                </SafeAreaView>
            )
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={{ height: '14%', width: '75%'}}>
                <FastImage source={titulo} style={{ height: '100%', width: '100%' }}></FastImage>
            </SafeAreaView>
            {Elo()}
            <SafeAreaView style={{
                marginTop: '3%',
                width: '100%'
            }}>
                <DivisorLine2></DivisorLine2>
            </SafeAreaView>
            <SafeAreaView style={{
                marginTop: '2%',
                height: '25%',
                width: '100%',
                padding: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <FastImage source={foto02} style={{ height: '100%', width: '100%' }}></FastImage>
            </SafeAreaView>
            <SafeAreaView style={{
                marginTop: '1%',
                width: '100%',
            }}>
                <DivisorLine2></DivisorLine2>
            </SafeAreaView>
            <SafeAreaView style={{
                marginTop: '3%',
                height: '24%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <FastImage source={foto03} style={{ height: '100%', width: '95%' }}></FastImage>
            </SafeAreaView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});