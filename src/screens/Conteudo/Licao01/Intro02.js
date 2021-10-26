//import bibliotecas
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';

//import images
import Introducao from '../../../assets/imgs/introducao.png';
import slides01 from '../../../assets/imgs/Conteudo/Licao01/slides01.png';
import slides02 from '../../../assets/imgs/Conteudo/Licao01/slides02.png';
import slides03 from '../../../assets/imgs/Conteudo/Licao01/slides03.png';
import slides04 from '../../../assets/imgs/Conteudo/Licao01/slides04.png';
import slides05 from '../../../assets/imgs/Conteudo/Licao01/slides05.png';


//import slides estaticos
import staticSlides from '../../../data/Conteudo/Licao01/Intro.json'

//import estilos
import {
    Bgcontainer, DivisorLine2
} from '../../../components/style'

export default function App() {

    const allSlides = staticSlides.slides;

    function renderSlides({ item }) {
        switch (item.image) {
            case ("slides01.png"):
                return (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                        <FastImage source={Introducao} style={{ width: 225, height: 80, marginTop: '2%' }}></FastImage>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides01} style={{ resizeMode: 'cover', height: '65%', width: '90%', marginTop: '1%' }}>
                        </FastImage>

                    </SafeAreaView>
                )
                break;
            case ("slides02.png"):
                return (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                        <FastImage source={Introducao} style={{ width: 225, height: 80, marginTop: '2%' }}></FastImage>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides02} style={{ resizeMode: 'cover', height: '65%', width: '90%', marginTop: '1%' }}>
                        </FastImage>
                    </SafeAreaView>
                )
                break;
            case ("slides03.png"):
                return (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                        <FastImage source={Introducao} style={{ width: 225, height: 80, marginTop: '2%' }}></FastImage>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides03} style={{ resizeMode: 'cover', height: '65%', width: '90%', marginTop: '1%' }}>
                        </FastImage>
                    </SafeAreaView>
                )
                break;
            case ("slides04.png"):
                return (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                        <FastImage source={Introducao} style={{ width: 225, height: 80, marginTop: '2%' }}></FastImage>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides04} style={{ resizeMode: 'cover', height: '65%', width: '90%', marginTop: '1%' }}>
                        </FastImage>
                    </SafeAreaView>
                )
                break;
            case ("slides05.png"):
                return (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                        <FastImage source={Introducao} style={{ width: 225, height: 80, marginTop: '2%' }}></FastImage>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides05} style={{ resizeMode: 'cover', height: '65%', width: '90%', marginTop: '1%' }}>
                        </FastImage>
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
            // bottomButton={true}
            showSkipButton={true}
            // nextLabel={'PRÓXIMO'}
            // skipLabel={'PULAR'}
            renderNextButton={nextButton}
            renderSkipButton={skipButton}
            renderDoneButton={doneButton}
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


