//import bibliotecas
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';

//import imagens
import ferro from '../../assets/imgs/Elos/ferro2.png';
import bronze from '../../assets/imgs/Elos/bronze2.png';
import titulo from '../../assets/imgs/Elos/sistemaElos.png';
import elos01 from '../../assets/imgs/Elos/elos.png';
import elos02 from '../../assets/imgs/Elos/elos.png';
import elos03 from '../../assets/imgs/Elos/elos.png';

//import estilos
import {
    DivisorLine2
} from '../../components/style'

//import elos estaticos
import staticElos from '../../data/Elos/Elos.json'

export default function Elos() {

    const [elo, setElo] = useState('ferro')
    const allElos = staticElos.elos;

    const allElos2 = [
        {
            "id": "1",
            "image": "elos01.png"
        },
        {
            "id": "2",
            "image": "elos02.png"
        },
        {
            "id": "3",
            "image": "elos03.png"
        }
    ];

    const renderTitle = () => {
        return (
            <SafeAreaView style={{ height: '12%', width: '75%' }}>
                <FastImage source={titulo} style={{ height: '100%', width: '100%' }}></FastImage>
            </SafeAreaView>
        )
    }

    const infoElo = () => {
        return (
            <SafeAreaView style={{ alignItems: 'center', width: '70%', height: '90%' }}>
                <SafeAreaView
                    style={styles.ShadowFeedbacks2}>
                    <SafeAreaView
                        style={styles.Feedbacks2}>
                        {textBoardElo()}
                    </SafeAreaView>
                </SafeAreaView>
                {textElo()}
            </SafeAreaView>

        )
    }

    const iconeElo = () => {
        if (elo == "ferro") {
            return (
                <SafeAreaView style={{ alignItems: 'center', width: '30%', height: '90%', padding: 5 }}>
                    <FastImage source={ferro} style={{ width: '100%', height: '100%' }}>
                    </FastImage>
                </SafeAreaView>
            )
        }

        if (elo == "bronze") {
            return (
                <SafeAreaView style={{ alignItems: 'center', backgroundColor: 'blue', width: '30%', height: '90%' }}>
                    <FastImage source={bronze} style={{ width: '100%', height: '100%' }}>
                    </FastImage>
                </SafeAreaView>
            )
        }
    }

    const textBoardElo = () => {
        if (elo == 'ferro') {
            return (
                <Text
                    style={{
                        fontFamily: "GothamCondensed-Medium",
                        textAlign: 'center', color: "#A9ABAE", fontSize: 36,
                    }}>
                    FERRO
                </Text>
            )
        }

        if (elo == 'bronze') {
            return (
                <Text
                    style={{
                        fontFamily: "GothamCondensed-Medium",
                        textAlign: 'center', color: "#A9ABAE", fontSize: 36,
                    }}>
                    BRONZE
                </Text>
            )
        }
    }

    const textElo = () => {
        if (elo == 'ferro') {
            return (
                <Text style={{
                    fontFamily: "GothamCondensed-Medium", textAlign: 'center',
                    fontSize: 20, color: "#A9ABAE"
                }}>Parabéns! Toda jornada tem um começo e{"\n"} você deu o primeiro passo rumo ao {"\n"} conhecimento. </Text>
            )
        }

        if (elo == 'bronze') {
            return (
                <Text style={{
                    fontFamily: "GothamCondensed-Medium", textAlign: 'center',
                    fontSize: 20, color: "#A9ABAE"
                }}> TESTE </Text>
            )
        }
    }

    const divisor = () => {
        return (
            <SafeAreaView style={styles.Divisor}>
            </SafeAreaView>
        )
    }
    const renderElo = () => {
        return (
            <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center', height: '30%', marginTop: '2%', margin: '2%' }}>
                {iconeElo()}
                {divisor()}
                {infoElo()}
            </SafeAreaView>
        )
    }

    const divisor2 = () => {
        return (
            <SafeAreaView style={{
                marginTop: '2%',
                width: '100%'
            }}>
                <DivisorLine2></DivisorLine2>
            </SafeAreaView>
        )
    }

    const renderImages = (imagem) => {

        if (imagem == "elos01.png") {
            return (
                <SafeAreaView style={{ backgroundColor: 'blue', margin: 5 }}>
                    <Text>TESTE</Text>
                </SafeAreaView>
            )
        }

        if (imagem == "elos02.png") {
            return (
                <SafeAreaView style={{ backgroundColor: 'blue', margin: 5 }}>
                    <Text>TESTE</Text>
                </SafeAreaView>
            )
        }

        if (imagem == "elos03.png") {
            return (
                <SafeAreaView style={{ backgroundColor: 'blue', margin: 5 }}>
                    <Text>TESTE</Text>
                </SafeAreaView>
            )
        }
    }

    const renderFlat = () => {
        return (
            <SafeAreaView style={{width: '90%', backgroundColor: 'red', alignItems: 'center', marginTop: '2%'}}>
                <FlatList
                    data={allElos2}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <ListItem imagem={item.image}></ListItem>}
                ></FlatList>
            </SafeAreaView>
        )
    }

    function ListItem({ imagem }) {
        return (
            renderImages(imagem)
        )
    }

    //Main
    return (
        <SafeAreaView style={styles.container}>
            {renderTitle()}
            {renderElo()}
            {divisor2()}
            {renderFlat()}
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    ShadowFeedbacks2: {
        marginTop: 30,
        width: '60%',
        height: 45,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 10,
        backgroundColor: '#D2D3D5',
        margin: 12
    },
    Feedbacks2: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginLeft: 10,
        marginTop: -4,
        borderWidth: 2,
        borderColor: '#D2D3D5',
        flexDirection: 'row',
    },
    Divisor: {
        width: 2,
        height: '90%',
        backgroundColor: '#D2D3D5',
        margin: 5
    }
});