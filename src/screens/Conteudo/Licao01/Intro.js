//import bibliotecas
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import Sound from 'react-native-sound';

//import imagens
import Introducao from '../../../assets/imgs/introducao.png';
import slides01 from '../../../assets/imgs/Conteudo/Licao01/slides01.png';
import slides02 from '../../../assets/imgs/Conteudo/Licao01/slides02.png';
import slides03 from '../../../assets/imgs/Conteudo/Licao01/slides03.png';
import slides04 from '../../../assets/imgs/Conteudo/Licao01/slides04.png';
import slides05 from '../../../assets/imgs/Conteudo/Licao01/slides05.png';
import iconeX from '../../../assets/imgs/iconeX.png';
import som from '../../../assets/imgs/sound.png';

//import slides estaticos
import staticSlides from '../../../data/Conteudo/Licao01/Intro.json'

//import estilos
import {
    DivisorLine2,
    DivisorLine,
    Div,
    ImageSound
} from '../../../components/style'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function App({ navigation }) {

    const [contador, setContador] = useState(false);
    const [play1, setPlay1] = useState(false);
    const [play2, setPlay2] = useState(false);
    const [play3, setPlay3] = useState(false);
    const [musica, setMusica] = useState(null)
    const allSlides = staticSlides.slides;



    const PlaySound = (music) => {
        if (music == "melodia") {
            var melodia = new Sound(require('../../../assets/sounds/melodia.mp3'), (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    return;
                }
                melodia.play(() => {
                });
            });
            setMusica(melodia);
            setPlay1(true)
        }

        if (music == "harmonia") {
            var harmonia = new Sound(require('../../../assets/sounds/harmonia.mp3'), (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    return;
                }
                harmonia.play(() => {
                });
            });
            setMusica(harmonia);
            setPlay2(true)
        }

        if (music == "ritmo") {
            var ritmo = new Sound(require('../../../assets/sounds/ritmo.mp3'), (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    return;
                }
                ritmo.play(() => {
                });
            });
            setMusica(ritmo);
            setPlay3(true)
        }
    }

    const StopSound = (music) => {

        if (musica != null && music == "melodia") {
            musica.stop();
            setPlay1(false)
        }
        if (musica != null && music == "harmonia") {
            musica.stop();
            setPlay2(false)
        }
        if (musica != null && music == "ritmo") {
            musica.stop();
            setPlay3(false)
        }
    }

    const selected1 = (music) => {
        if (play1 == false) {
            PlaySound(music)
        } else {
            StopSound(music)
        }
    }

    const selected2 = (music) => {
        if (play2 == false) {
            PlaySound(music)
        } else {
            StopSound(music)
        }
    }

    const selected3 = (music) => {
        if (play3 == false) {
            PlaySound(music)
        } else {
            StopSound(music)
        }
    }

    const renderSounds01 = (music) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => selected1(music)}
            >
                <ImageSound source={som}>
                </ImageSound>
            </TouchableWithoutFeedback>
        )
    }

    const renderSounds02 = (music) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => selected2(music)}
            >
                <ImageSound source={som}>
                </ImageSound>
            </TouchableWithoutFeedback>
        )
    }

    const renderSounds03 = (music) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => selected3(music)}
            >
                <ImageSound source={som}>
                </ImageSound>
            </TouchableWithoutFeedback>
        )
    }

    const close = () => {
        navigation.navigate('Main')
        if (play1 == true) {
            musica.stop()
        }
        if (play2 == true) {
            musica.stop()
        }
        if (play3 == true) {
            musica.stop()
        }
    }

    function renderSlides({ item }) {
        switch (item.image) {
            case ("slides01.png"):
                return (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                        <SafeAreaView style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                            <TouchableOpacity onPress={close} style={{ alignSelf: 'flex-start', position: 'absolute', marginLeft: '3%', marginBottom: '1%' }}>
                                <FastImage source={iconeX} style={{ width: 40, height: 40 }}></FastImage>
                            </TouchableOpacity>
                            <FastImage source={Introducao} style={{ width: 225, height: 80, marginBottom: '1%' }}></FastImage>
                        </SafeAreaView>
                        <DivisorLine2></DivisorLine2>
                        <SafeAreaView style={{ height: '62%', width: '100%', alignItems: 'center', marginTop: '2%', padding: 2 }}>
                            <FastImage source={slides01} style={{ height: '100%', width: '90%' }}>
                            </FastImage>
                        </SafeAreaView>
                    </SafeAreaView>
                )
                break;
            case ("slides02.png"):
                return (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>
                        <SafeAreaView style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                            <TouchableOpacity onPress={close} style={{ alignSelf: 'flex-start', position: 'absolute', marginLeft: '3%', marginBottom: '1%' }}>
                                <FastImage source={iconeX} style={{ width: 40, height: 40 }}></FastImage>
                            </TouchableOpacity>
                            <FastImage source={Introducao} style={{ width: 225, height: 80, marginBottom: '1%' }}></FastImage>
                        </SafeAreaView>
                        <DivisorLine2></DivisorLine2>
                        <SafeAreaView style={{ height: '62%', width: '100%', alignItems: 'center', marginTop: '2%' }}>
                            <FastImage source={slides02} style={{ height: '100%', width: '90%' }}>
                            </FastImage>
                        </SafeAreaView>
                    </SafeAreaView>
                )
                break;
            case ("slides03.png"):
                return (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                        <SafeAreaView style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                            <TouchableOpacity onPress={close} style={{ alignSelf: 'flex-start', position: 'absolute', marginLeft: '3%', marginBottom: '1%' }}>
                                <FastImage source={iconeX} style={{ width: 40, height: 40 }}></FastImage>
                            </TouchableOpacity>
                            <FastImage source={Introducao} style={{ width: 225, height: 80, marginBottom: '1%' }}></FastImage>
                        </SafeAreaView>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides03} style={{ resizeMode: 'cover', height: '52%', width: '90%', marginTop: '4%' }}>
                        </FastImage>
                        <Div>
                            <DivisorLine></DivisorLine>
                            {renderSounds01(item.music)}
                            <DivisorLine></DivisorLine>
                        </Div>
                    </SafeAreaView>
                )
                break;
            case ("slides04.png"):
                return (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>
                        <SafeAreaView style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                            <TouchableOpacity onPress={close} style={{ alignSelf: 'flex-start', position: 'absolute', marginLeft: '3%', marginBottom: '1%' }}>
                                <FastImage source={iconeX} style={{ width: 40, height: 40 }}></FastImage>
                            </TouchableOpacity>
                            <FastImage source={Introducao} style={{ width: 225, height: 80, marginBottom: '1%' }}></FastImage>
                        </SafeAreaView>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides04} style={{ resizeMode: 'cover', height: '52%', width: '90%', marginTop: '4%' }}>
                        </FastImage>
                        <Div>
                            <DivisorLine></DivisorLine>
                            {renderSounds02(item.music)}
                            <DivisorLine></DivisorLine>
                        </Div>
                    </SafeAreaView>
                )
                break;
            case ("slides05.png"):
                return (
                    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>
                        <SafeAreaView style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                            <TouchableOpacity onPress={close} style={{ alignSelf: 'flex-start', position: 'absolute', marginLeft: '3%', marginBottom: '1%' }}>
                                <FastImage source={iconeX} style={{ width: 40, height: 40 }}></FastImage>
                            </TouchableOpacity>
                            <FastImage source={Introducao} style={{ width: 225, height: 80, marginBottom: '1%' }}></FastImage>
                        </SafeAreaView>
                        <DivisorLine2></DivisorLine2>
                        <FastImage source={slides05} style={{ resizeMode: 'cover', height: '52%', width: '90%', marginTop: '4%' }}>
                        </FastImage>
                        <Div>
                            <DivisorLine></DivisorLine>
                            {renderSounds03(item.music)}
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

    const Done = () => {
        navigation.navigate('Introdução')
        if (musica != null) {
            musica.stop()
        }
    }

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

    const teste = () => {
        if (musica != null) {
            setPlay1(false)
            setPlay2(false)
            setPlay3(false)
            musica.stop()
        }
    }

    return (

        <AppIntroSlider
            renderItem={renderSlides}
            data={allSlides}
            onSlideChange={teste}
            style={{ backgroundColor: '#FFF' }}
            activeDotStyle={{
                marginTop: '6%',
                backgroundColor: '#96989A'
            }}
            dotStyle={{
                marginTop: '6%',
                backgroundColor: '#D2D3D5'
            }}
            showSkipButton={true}
            showPrevButton={true}
            bottomButton={true}
            renderNextButton={nextButton}
            renderSkipButton={skipButton}
            renderDoneButton={doneButton}
            renderPrevButton={prevButton}
            onDone={Done}
        >
        </AppIntroSlider>
    )
}

const styles = StyleSheet.create({
    ShadowButtons1: {
        marginBottom: 6,
        height: 48,
        width: '95%',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 12,
        backgroundColor: "#236A79",
    },
    Buttons1: {
        width: '100%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#3CB1C7',
    },
    ShadowButtons2: {
        width: '95%',
        height: 48,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 12,
        backgroundColor: "#D2D3D5",
    },
    Buttons2: {
        width: '100%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#D2D3D5",
        backgroundColor: '#FFF',
    },
    ShadowButtons3: {
        width: '95%',
        marginBottom: 6,
        height: 48,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 12,
        backgroundColor: "#DAA520",
    },
    Buttons3: {
        width: '100%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#FDC500',
    },
});


