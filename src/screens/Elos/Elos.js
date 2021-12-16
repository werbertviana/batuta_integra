//import bibliotecas
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';

//import api
import api from '../../services/Api';

//import imagens

import ferro from '../../assets/imgs/Elos/ferro.png';
import bronze from '../../assets/imgs/Elos/bronze.png';
import titulo from '../../assets/imgs/Elos/titulo.png';
import list01 from '../../assets/imgs/Elos/list01.png';
import list02 from '../../assets/imgs/Elos/list02.png';
import list03 from '../../assets/imgs/Elos/list03.png';
import question from '../../assets/imgs/Elos/questionIcon.png';

//import estilos
import {
    DivisorLine2,
    Bgcontainer
} from '../../components/style'

//import elos estaticos
import staticElos from '../../data/Elos/Elos.json'

export default function Elos() {

    // const [elo, setElo] = useState('ferro');
    let elo;
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState()
    const allElos = staticElos.elos;


    //solicitando requisição de Usuários no backend
    useEffect(() => {
        api.get("/users").then((response) => {
            setUsers(response.data)
            setLoading(false);
        });
    }, []);

    if (users) {
        users.map((item) => {
            elo = item.elo
        }
        );
    }

    //loading
    if (loading) {
        return (
            <SafeAreaView style={styles.containerLoading}>
                <ActivityIndicator
                    size="large"
                    color="black">
                </ActivityIndicator>
                <Text>CARREGANDO...</Text>
            </SafeAreaView>
        )
    }


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
            <SafeAreaView style={{ height: '12%', width: '75%', marginTop: '4%' }}>
                <FastImage source={titulo} style={{ height: '100%', width: '100%' }}></FastImage>
            </SafeAreaView>
        )
    }

    const infoElo = () => {
        return (
            <SafeAreaView style={{ alignItems: 'center', width: '64%', height: '90%', justifyContent: 'center', margin: 2 }}>
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
                <SafeAreaView style={{ alignItems: 'center', width: '30%', height: '90%', padding: 5 }}>
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
                        textAlign: 'center', color: "#606062", fontSize: 36,
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
                        textAlign: 'center', color: "#606062", fontSize: 36,
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
                    fontSize: 22, color: "#606062"
                }}>Parabéns! Toda jornada tem um começo e você deu o primeiro passo rumo ao conhecimento. </Text>
            )
        }

        if (elo == 'bronze') {
            return (
                <Text style={{
                    fontFamily: "GothamCondensed-Medium", textAlign: 'center',
                    fontSize: 22, color: "#606062"
                }}>Parabéns! Continue seguindo assim. </Text>
            )
        }
    }

    const divisor = () => {
        return (
            <SafeAreaView style={{
                width: '100%'
            }}>
                <DivisorLine2></DivisorLine2>
            </SafeAreaView>
        )
    }

    const divisor2 = () => {
        return (
            <SafeAreaView style={styles.Divisor}>
            </SafeAreaView>
        )
    }

    const renderElo = () => {
        return (
            <Animatable.View
                animation="pulse"
                useNativeDriver
                style={{
                    flexDirection: 'row', alignItems: 'center',
                    height: '30%', marginTop: '2%', margin: '2%',
                    width: '100%', justifyContent: 'center'
                }}>
                {iconeElo()}
                {divisor2()}
                {infoElo()}
            </Animatable.View>
        )
    }

    const renderImages = (imagem) => {

        if (imagem == "elos01.png") {
            return (

                <SafeAreaView style={{ margin: 5, alignItems: 'center' }}>
                    <SafeAreaView
                        style={styles.ShadowFeedbacks}>
                        <SafeAreaView
                            style={styles.Feedbacks}>
                            <Text
                                style={{
                                    fontFamily: "GothamCondensed-Medium",
                                    textAlign: 'center', color: "#606062", fontSize: 32,
                                }}>
                                COMO FUNCIONA?
                            </Text>
                            <FastImage source={question} style={{ width: 35, height: 35, marginLeft: 10 }}></FastImage>
                        </SafeAreaView>
                    </SafeAreaView>
                    <FastImage source={list01} style={{ width: 400, height: 385 }}></FastImage>
                </SafeAreaView>

            )
        }

        if (imagem == "elos02.png") {
            return (
                <SafeAreaView style={{ margin: 5, alignItems: 'center' }}>
                    <FastImage source={list02} style={{ width: 400, height: 245 }}></FastImage>
                </SafeAreaView>
            )
        }

        if (imagem == "elos03.png") {
            return (

                <SafeAreaView style={{ margin: 5, alignItems: 'center' }}>
                    {divisor()}
                    <FastImage source={list03} style={{ width: 400, height: 250 }}></FastImage>
                </SafeAreaView>

            )
        }
    }

    const renderFlat = () => {
        return (
            <FlatList
                data={allElos2}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <ListItem imagem={item.image}></ListItem>}
            ></FlatList>
        )
    }

    function ListItem({ imagem }) {
        return (
            renderImages(imagem)
        )
    }

    //Main
    return (
        <Bgcontainer>
            {renderTitle()}
            {renderElo()}
            {divisor()}
            {renderFlat()}
        </Bgcontainer>
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
    ShadowFeedbacks: {
        marginTop: 30,
        width: '60%',
        height: 45,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 10,
        backgroundColor: '#D2D3D5',
        margin: 12
    },
    Feedbacks: {
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
        width: 3,
        height: '90%',
        backgroundColor: '#D2D3D5',
        margin: 2
    }
});