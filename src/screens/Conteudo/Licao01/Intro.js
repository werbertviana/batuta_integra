//import bibliotecas
import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
//import Sound from 'react-native-sound';



//import images
import Introducao from '../../../assets/imgs/introducao.png';
import slides01 from '../../../assets/imgs/Conteudo/Licao01/slides01.png';
import slides02 from '../../../assets/imgs/Conteudo/Licao01/slides02.png';
import slides03 from '../../../assets/imgs/Conteudo/Licao01/slides03.png';
import slides04 from '../../../assets/imgs/Conteudo/Licao01/slides04.png';
import slides05 from '../../../assets/imgs/Conteudo/Licao01/slides05.png';
import iconeX from '../../../assets/imgs/iconeX.png';
import Elo from '../../../assets/imgs/iconeElo.png';


//import slides estaticos
import staticSlides from '../../../data/Conteudo/Licao01/Intro.json'

//import estilos
import {
    DivisorLine2,
    DivisorLine,
    Div,
    ImageNivel
} from '../../../components/style'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function App({ navigation }) {

    const allSlides = staticSlides.slides;

    function renderSlides({ item }) {
        switch (item.image) {
            case ("slides01.png"):
                return (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>
                        <SafeAreaView style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ alignSelf: 'flex-start', position: 'absolute', marginLeft: '3%', marginBottom: '1%' }}>
                                <FastImage source={iconeX} style={{ width: 40, height: 40 }}></FastImage>
                            </TouchableOpacity>
                            <FastImage source={Introducao} style={{ width: 225, height: 80, marginBottom: '1%' }}></FastImage>
                        </SafeAreaView>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides01} style={{ resizeMode: 'cover', height: '65%', width: '90%', marginTop: '4%' }}>
                        </FastImage>
                    </SafeAreaView>
                )
                break;
            case ("slides02.png"):
                return (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>
                        <SafeAreaView style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ alignSelf: 'flex-start', position: 'absolute', marginLeft: '3%', marginBottom: '1%' }}>
                                <FastImage source={iconeX} style={{ width: 40, height: 40 }}></FastImage>
                            </TouchableOpacity>
                            <FastImage source={Introducao} style={{ width: 225, height: 80, marginBottom: '1%' }}></FastImage>
                        </SafeAreaView>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides02} style={{ resizeMode: 'cover', height: '65%', width: '90%', marginTop: '4%' }}>
                        </FastImage>
                    </SafeAreaView>
                )
                break;
            case ("slides03.png"):
                return (
                    <SafeAreaView style={{ height:'95%', alignItems: 'center', backgroundColor: '#FFF' }}>
                        <SafeAreaView style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ alignSelf: 'flex-start', position: 'absolute', marginLeft: '3%', marginBottom: '1%' }}>
                                <FastImage source={iconeX} style={{ width: 40, height: 40 }}></FastImage>
                            </TouchableOpacity>
                            <FastImage source={Introducao} style={{ width: 225, height: 80, marginBottom: '1%' }}></FastImage>
                        </SafeAreaView>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides03} style={{ resizeMode: 'cover', height: '65%', width: '90%', marginTop: '4%' }}>
                        </FastImage>
                        <Div>
                            <DivisorLine></DivisorLine>
                            <TouchableWithoutFeedback>
                                <ImageNivel source={Elo}>
                                </ImageNivel>
                            </TouchableWithoutFeedback>
                            <DivisorLine></DivisorLine>
                        </Div>
                    </SafeAreaView>
                )
                break;
            case ("slides04.png"):
                return (
                    <SafeAreaView style={{ height:'95%', alignItems: 'center', backgroundColor: '#FFF' }}>
                        <SafeAreaView style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ alignSelf: 'flex-start', position: 'absolute', marginLeft: '3%', marginBottom: '1%' }}>
                                <FastImage source={iconeX} style={{ width: 40, height: 40 }}></FastImage>
                            </TouchableOpacity>
                            <FastImage source={Introducao} style={{ width: 225, height: 80, marginBottom: '1%' }}></FastImage>
                        </SafeAreaView>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides04} style={{ resizeMode: 'cover', height: '65%', width: '90%', marginTop: '4%' }}>
                        </FastImage>
                        <Div>
                            <DivisorLine></DivisorLine>
                            <TouchableWithoutFeedback>
                                <ImageNivel source={Elo}>
                                </ImageNivel>
                            </TouchableWithoutFeedback>
                            <DivisorLine></DivisorLine>
                        </Div>
                    </SafeAreaView>
                )
                break;
            case ("slides05.png"):
                return (
                    <SafeAreaView style={{ height:'95%', alignItems: 'center', backgroundColor: '#FFF' }}>
                        <SafeAreaView style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ alignSelf: 'flex-start', position: 'absolute', marginLeft: '3%', marginBottom: '1%' }}>
                                <FastImage source={iconeX} style={{ width: 40, height: 40 }}></FastImage>
                            </TouchableOpacity>
                            <FastImage source={Introducao} style={{ width: 225, height: 80, marginBottom: '1%' }}></FastImage>
                        </SafeAreaView>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides05} style={{ resizeMode: 'cover', height: '65%', width: '90%', marginTop: '4%' }}>
                        </FastImage>
                        <Div>
                            <DivisorLine></DivisorLine>
                            <TouchableWithoutFeedback>
                                <ImageNivel source={Elo}>
                                </ImageNivel>
                            </TouchableWithoutFeedback>
                            <DivisorLine></DivisorLine>
                        </Div>
                    </SafeAreaView>
                )
                break;
        }
    }

    const nextButton = () => {
        return (
            <SafeAreaView
                style={styles.ShadowButtons1}>
                <SafeAreaView
                    style={styles.Buttons1}>
                    <Text
                        style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "white", fontSize: 30,
                        }}>
                        PRÓXIMO
                    </Text>
                </SafeAreaView>
            </SafeAreaView>
        );
    };

    const skipButton = () => {
        return (
            <SafeAreaView
                style={styles.ShadowButtons2}>
                <SafeAreaView
                    style={styles.Buttons2}>
                    <Text
                        style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "black", fontSize: 30,
                        }}>
                        PULAR
                    </Text>
                </SafeAreaView>
            </SafeAreaView>
        );
    };

    const prevButton = () => {
        return (
            <SafeAreaView
                style={styles.ShadowButtons2}>
                <SafeAreaView
                    style={styles.Buttons2}>
                    <Text
                        style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "black", fontSize: 30,
                        }}>
                        VOLTAR
                    </Text>
                </SafeAreaView>
            </SafeAreaView>
        );
    };

    const doneButton = () => {
        return (
            <SafeAreaView
                style={styles.ShadowButtons3}>
                <SafeAreaView
                    style={styles.Buttons3}>
                    <Text
                        style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "white", fontSize: 30,
                        }}>
                        PRATICAR
                    </Text>
                </SafeAreaView>
            </SafeAreaView>
        );
    };

    return (

        <AppIntroSlider
            renderItem={renderSlides}
            data={allSlides}
            activeDotStyle={{
                backgroundColor: '#96989A'
            }}
            showSkipButton={true}
            showPrevButton={true}
            renderNextButton={nextButton}
            renderSkipButton={skipButton}
            renderDoneButton={doneButton}
            renderPrevButton={prevButton}
            onDone={() => navigation.navigate('Introdução')}
        >
        </AppIntroSlider>
    )
}

const styles = StyleSheet.create({
    ShadowButtons1: {
        width: 110,
        height: 50,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 15,
        backgroundColor: "#236A79",
    },
    Buttons1: {
        width: '100%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#3CB1C7',
    },
    ShadowButtons2: {
        width: 110,
        height: 50,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 15,
        backgroundColor: "#D2D3D5",
    },
    Buttons2: {
        width: '100%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#D2D3D5",
        backgroundColor: '#FFF',
    },
    ShadowButtons3: {
        width: 110,
        height: 50,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 15,
        backgroundColor: "#DAA520",
    },
    Buttons3: {
        width: '100%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#FDC500',
    },
});


