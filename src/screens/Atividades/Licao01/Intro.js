import React, { useState, useRef, useEffect } from 'react';
// import estilos
import {
    Bgcontainer,
    QuestionText,
    IconImages,
    IconImages02,
    ImageQuestions,
    ButtonContainer,
    JumpText,
    HeaderContainer,
    CloseButtonContainer,
    StyleButtons,
    ImagesContainer2,
    ContainerCircle,
    ImageModal
} from '../../../components/style'
// import ícones
import iconeX from '../../../assets/imgs/iconeX.png';
import iconeLife from '../../../assets/imgs/iconeLife.png';
import checkIcon from '../../../assets/imgs/checkIcon.png'
import errorIcon from '../../../assets/imgs/errorIcon.png'
import ativConcluida from '../../../assets/imgs/concluida.png'
import iconeXp from '../../../assets/imgs/iconeXp.png'
import tente from '../../../assets/imgs/tente.png'

//import questões
import QF01 from '../../../assets/imgs/QF01.png'
import QF02 from '../../../assets/imgs/QF02.png'
import QF03 from '../../../assets/imgs/QF03.png'
import QF04 from '../../../assets/imgs/QF04.png'
import QF05 from '../../../assets/imgs/QF05.png'
import QF06 from '../../../assets/imgs/QF06.png'
import QF07 from '../../../assets/imgs/QF07.png'
import QF08 from '../../../assets/imgs/QF08.png'
import QF09 from '../../../assets/imgs/QF09.png'
import QF10 from '../../../assets/imgs/QF10.png'
import QF11 from '../../../assets/imgs/QF11.png'
import QF12 from '../../../assets/imgs/QF12.png'
import QB01 from '../../../assets/imgs/QB01.png'
import QB02 from '../../../assets/imgs/QB02.png'
import QB03 from '../../../assets/imgs/QB03.png'
import QB04 from '../../../assets/imgs/QB04.png'
import QB05 from '../../../assets/imgs/QB05.png'
import QB06 from '../../../assets/imgs/QB06.png'
import QB07 from '../../../assets/imgs/QB07.png'
import QB08 from '../../../assets/imgs/QB08.png'
import QB09 from '../../../assets/imgs/QB09.png'
import QB10 from '../../../assets/imgs/QB10.png'
import QB11 from '../../../assets/imgs/QB11.png'
import QB12 from '../../../assets/imgs/QB12.png'
// import elos
import ferro from '../../../assets/imgs/ferro.png'
import bronze from '../../../assets/imgs/bronze.png'
import ferro2 from '../../../assets/imgs/ferro2.png'
import bronze2 from '../../../assets/imgs/bronze2.png'
// import bibliotecas

import FastImage from 'react-native-fast-image';
import {
    SafeAreaView,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    Animated,
    Image,
    StyleSheet,
    View
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import niveis de dificuldade
import DivFacil from '../../../components/DivFacil';
import DivMedio from '../../../components/DivMedio';
import DivDificil from '../../../components/DivDificil';
//import api
import api from '../../../services/Api';
import { identifier } from '@babel/types';



export default function App({ navigation }) {

    const ButtonRef = useRef()
    const Button2Ref = useRef()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [lifePoints, setlifePoints] = useState(5);
    const [animLife, setAnimLife] = useState(false);
    const [animQuestions, setAnimQuestions] = useState(false);
    const [scoreRigthModal, setScoreRigthModal] = useState(false);
    const [scoreWrongModal, setScoreWrongModal] = useState(false);
    const [showLifeModal, setShowLifeModal] = useState(false);
    const [showRightModal, setShowRightModal] = useState(false);
    const [showWrongModal, setShowWrongModal] = useState(false);
    const [xpPoints, setxpPoints] = useState(0);
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState();
    const [items, setItems] = useState([]);
    const [progress, setProgress] = useState(new Animated.Value(0));
    let item_id;


    //Requisição buscar items no backend
    useEffect(() => {
        api.get("/items").then((response) => {
            setItems(response.data);
            setLoading(false)
        });

    }, []);


    items.map((i) => {
        if (i.title == "Introdução") {
            item_id = i.id
        }
    }
    )

    useEffect(() => {
        if (item_id) {
            api.get("/items/questions/alternatives/" + item_id).then((response) => {
                setQuestions(response.data);

            })
        }

    }, [item_id]);

    if (loading || !questions) {
        return <></>
    }


    const renderQuestion = () => {
        return (
            <View style={{
                alignItems: 'center',
                marginTop: 2
            }}>
                <QuestionText>
                    {questions[currentQuestionIndex].name}
                </QuestionText>
            </View>
        )
    }

    const handleNext = () => {
        if (currentQuestionIndex == questions.length - 1) {
            // Last Question
            // Show Score Modal
            renderModal()
            Animated.timing(progress, {
                toValue: currentQuestionIndex,
                duration: 1000,
                useNativeDriver: false
            }).start();
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setAnimQuestions(true);
            Animated.timing(progress, {
                toValue: currentQuestionIndex + 1,
                duration: 1000,
                useNativeDriver: false
            }).start();
        }
    }

    const restartQuiz = () => {
        setScoreRigthModal(false);
        setScoreWrongModal(false);
        setShowLifeModal(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentOptionSelected(null);
        setAnimLife(false);
        setlifePoints(5);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const exitModal = () => {
        setShowLifeModal(false);
        setShowRightModal(false);
        setShowWrongModal(false);
        correct_option = questions[currentQuestionIndex].correct_option;
        if (currentOptionSelected != correct_option) {
            setlifePoints(lifePoints - 1);
            setAnimLife(true);
        }
        handleNext();
    }

    let cont = 0;
    const renderImages = (opcao) => {
        cont++
        switch (opcao) {
            case ("QF01.png"):
                return (
                    <ImageQuestions source={QF01}></ImageQuestions>
                )
                break;
            case ("QF02.png"):
                return (
                    <ImageQuestions source={QF02}></ImageQuestions>
                )
                break;
            case ("QF03.png"):
                return (
                    <ImageQuestions source={QF03}></ImageQuestions>
                )
                break;
            case ("QF04.png"):
                return (
                    <ImageQuestions source={QF04}></ImageQuestions>
                )
                break;
            case ("QF05.png"):
                return (
                    <ImageQuestions source={QF05}></ImageQuestions>
                )
                break;
            case ("QF06.png"):
                return (
                    <ImageQuestions source={QF06}></ImageQuestions>
                )
                break;
            case ("QF07.png"):
                return (
                    <ImageQuestions source={QF07}></ImageQuestions>
                )
                break;
            case ("QF08.png"):
                return (
                    <ImageQuestions source={QF08}></ImageQuestions>
                )
                break;
            case ("QF09.png"):
                return (
                    <ImageQuestions source={QF09}></ImageQuestions>
                )
                break;
            case ("QF10.png"):
                return (
                    <ImageQuestions source={QF10}></ImageQuestions>
                )
                break;
            case ("QF11.png"):
                return (
                    <ImageQuestions source={QF11}></ImageQuestions>
                )
                break;
            case ("QF12.png"):
                return (
                    <ImageQuestions source={QF12}></ImageQuestions>
                )
                break;
            case ("QB01.png"):
                return (
                    <ImageQuestions source={QB01}></ImageQuestions>
                )
                break;
            case ("QB02.png"):
                return (
                    <ImageQuestions source={QB02}></ImageQuestions>
                )
                break;
            case ("QB03.png"):
                return (
                    <ImageQuestions source={QB03}></ImageQuestions>
                )
                break;
            case ("QB04.png"):
                return (
                    <ImageQuestions source={QB04}></ImageQuestions>
                )
                break;
            case ("QB05.png"):
                return (
                    <ImageQuestions source={QB05}></ImageQuestions>
                )
                break;
            case ("QB06.png"):
                return (
                    <ImageQuestions source={QB06}></ImageQuestions>
                )
                break;
            case ("QB07.png"):
                return (
                    <ImageQuestions source={QB07}></ImageQuestions>
                )
                break;
            case ("QB08.png"):
                return (
                    <ImageQuestions source={QB08}></ImageQuestions>
                )
                break;
            case ("QB09.png"):
                return (
                    <ImageQuestions source={QB09}></ImageQuestions>
                )
                break;
            case ("QB10.png"):
                return (
                    <ImageQuestions source={QB10}></ImageQuestions>
                )
                break;
            case ("QB11.png"):
                return (
                    <ImageQuestions source={QB11}></ImageQuestions>
                )
                break;
            case ("QB12.png"):
                return (
                    <ImageQuestions source={QB12}></ImageQuestions>
                )
                break;
        }
    }

    const renderAlternatives = (contador, alternatives) => {

        switch (contador) {
            case (1):
                return (
                    <View style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        borderWidth: 3,
                        alignItems: 'center',
                        borderColor: '#D2D3D5',
                        justifyContent: 'center',
                        borderColor: currentOptionSelected != alternatives.option
                            ? "#D2D3D5"
                            : "#FDC500",
                        backgroundColor: currentOptionSelected == alternatives.option
                            ? "#FFFAE5"
                            : "#fff"

                    }}>
                        <Text style={{ fontFamily: 'GothamCondensed-Medium', fontSize: 20 }}>
                            A
                        </Text>
                    </View>
                )
                break;
            case (2):
                return (
                    <View style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        borderWidth: 3,
                        alignItems: 'center',
                        borderColor: '#D2D3D5',
                        justifyContent: 'center',
                        borderColor: currentOptionSelected != alternatives.option
                            ? "#D2D3D5"
                            : "#FDC500",
                        backgroundColor: currentOptionSelected == alternatives.option
                            ? "#FFFAE5"
                            : "#fff"

                    }}>
                        <Text style={{ fontFamily: 'GothamCondensed-Medium', fontSize: 20 }}>
                            B
                        </Text>
                    </View>
                )
                break;
            case (3):
                return (
                    <View style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        borderWidth: 3,
                        alignItems: 'center',
                        borderColor: '#D2D3D5',
                        justifyContent: 'center',
                        borderColor: currentOptionSelected != alternatives.option
                            ? "#D2D3D5"
                            : "#FDC500",
                        backgroundColor: currentOptionSelected == alternatives.option
                            ? "#FFFAE5"
                            : "#fff"

                    }}>
                        <Text style={{ fontFamily: 'GothamCondensed-Medium', fontSize: 20 }}>
                            C
                        </Text>
                    </View>
                )
                break;
            case (4):
                return (
                    <View style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        borderWidth: 3,
                        alignItems: 'center',
                        borderColor: '#D2D3D5',
                        justifyContent: 'center',
                        borderColor: currentOptionSelected != alternatives.option
                            ? "#D2D3D5"
                            : "#FDC500",
                        backgroundColor: currentOptionSelected == alternatives.option
                            ? "#FFFAE5"
                            : "#fff"

                    }}>
                        <Text style={{ fontFamily: 'GothamCondensed-Medium', fontSize: 20 }}>
                            D
                        </Text>
                    </View>
                )
                break;
        }
    }

    let correct_option
    const validateAnswer = () => {
        correct_option = questions[currentQuestionIndex].correct_alternative;
        if (currentOptionSelected == correct_option) {
            //Set Score
            setScore(score + 1)
            // Show Right Modal
            setShowRightModal(true);
        } else {
            // Show Wrong Modal        
            setShowWrongModal(true);
        }
    }

    const renderJumpButton = () => {
        return (
            <TouchableWithoutFeedback
                onPress={() => Button2Ref.current.pulse(handleNext())}
            >
                <Animatable.View style={styles.ShadowJumpButton}
                    animation="pulse"
                    useNativeDriver
                    ref={Button2Ref}>
                    <StyleButtons
                        bg={"#fff"}
                        bordercolor={'#D2D3D5'}
                        borderwidth={'2px'}>
                        <JumpText colorText={"#606062"}> PULAR </JumpText>
                    </StyleButtons>
                </Animatable.View>
            </TouchableWithoutFeedback>
        )
    }

    const renderButtonConfirm = () => {

        return (
            <TouchableWithoutFeedback

                disabled={currentOptionSelected == null
                    ? true
                    : false}
                onPress={() => ButtonRef.current.pulse(validateAnswer())}
            >
                <Animatable.View style={currentOptionSelected == null
                    ? styles.ShadowConfirmButtonDisabled
                    : styles.ShadowConfirmButtonEnabled}
                    animation={currentOptionSelected == null
                        ? ""
                        : "pulse"}
                    useNativeDriver
                    ref={ButtonRef}>
                    <StyleButtons bg={currentOptionSelected == null
                        ? "#D2D3D5"
                        : "#FDC500"}
                        bordercolor={currentOptionSelected == null
                            ? '#fff'
                            : '#846214'}
                        borderwidth={'0'}>
                        <Text style={{
                            fontFamily: "GothamCondensed-Medium",
                            fontSize: 28,
                            color: currentOptionSelected == null
                                ? "#606062"
                                : "#fff"
                        }}> CONFIRMAR </Text>
                    </StyleButtons>
                </Animatable.View>
            </TouchableWithoutFeedback>
        )
    }


    const selected = (selecao) => {
        setCurrentOptionSelected(selecao)
        setAnimLife(false)
    }

    const renderElos = () => {
        let elo = questions[currentQuestionIndex].elo
        switch (elo) {
            case ("ferro"):
                return (
                    <Image style={{ width: 35, height: 35 }} source={ferro}></Image>
                )
                break;
            case ("bronze"):
                return (
                    <Image style={{ width: 35, height: 35 }} source={bronze}></Image>
                )
                break;
        }
    }

    const renderElos2 = () => {
        let elo = questions[currentQuestionIndex].elo
        switch (elo) {
            case ("ferro"):
                return (
                    <Image style={{ width: 35, height: 50 }} source={ferro2}></Image>
                )
                break;
            case ("bronze"):
                return (
                    <Image style={{ width: 35, height: 50 }} source={bronze2}></Image>
                )
                break;
        }
    }

    const renderCloseButton = () => {
        return (

            <CloseButtonContainer
                onPress={() => navigation.navigate('Main')}>
                <IconImages
                    source={iconeX}>
                </IconImages>
            </CloseButtonContainer>

        )
    }

    // {/* Config Progress Bar */ }
    let percent = ((100) / questions.length);
    percent = Math.round(percent)
    percent.toString()
    percent = percent + "%"
    const progressAnim2 = progress.interpolate({
        inputRange: [0, questions.length - 1],
        outputRange: ['90%', '90%']
    })

    const progressAnim = progress.interpolate({
        inputRange: [0, questions.length - 1],
        outputRange: [percent, '100%']
    })

    const renderProgressBar = () => {
        return (

            <SafeAreaView style={{
                width: '65%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#d1d3d5',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: '#61BE4B',
                }, {
                    width: progressAnim
                }]}>
                    <Animated.View style={[{
                        height: 6,
                        borderRadius: 20,
                        marginTop: 4,
                        alignSelf: 'center',
                        backgroundColor: '#A1D995',
                    }, {
                        width: progressAnim2
                    }]}>

                    </Animated.View>
                </Animated.View>
            </SafeAreaView>
        )
    }

    const renderLife = () => {
        return (
            <Animatable.View style={styles.LifeContainer}
                animation={animLife == true
                    ? "tada"
                    : ""}
                useNativeDriver
                iterationCount={1}
            >
                <IconImages02
                    source={iconeLife}>
                </IconImages02>
                {renderTextLife()}
            </Animatable.View>
        )
    }

    const renderTextLife = () => {
        return (
            <Animatable.Text style={styles.LifeText}
                animation={animLife == true
                    ? "bounceIn"
                    : ""}
                useNativeDriver
                duration={3000}
                iterationCount={1}>
                {lifePoints}
            </Animatable.Text>
        )
    }

    const renderLevel = () => {

        let level = questions[currentQuestionIndex].levels
        if (level == "facil") {
            return (

                <DivFacil></DivFacil>
            )
        } else {
            if (level == "medio") {
                return (
                    <DivMedio></DivMedio>
                )

            } else {
                if (level == "dificil") {
                    return (
                        <DivDificil></DivDificil>
                    )

                }
            }
        }
    }

    const renderHeader = () => {
        return (
            <HeaderContainer>
                {renderCloseButton()}
                {renderProgressBar()}
                {renderLife()}
            </HeaderContainer>
        )
    }

    const rightFeedbacks = () => {
        return (
            <SafeAreaView
                style={{
                    marginTop: 25,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    //backgroundColor: 'red',
                }}>

                <SafeAreaView
                    style={styles.ShadowFeedbacks}>
                    <SafeAreaView
                        style={styles.Feedbacks}>
                        <Text
                            style={{
                                fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#606062", fontSize: 30,
                            }}>
                            XP DA ATIVIDADE
                        </Text>
                        <FastImage
                            style={styles.IconImages}
                            source={iconeXp}>
                        </FastImage>
                        <Text
                            style={styles.XpText}>
                            {xpPoints}
                        </Text>
                    </SafeAreaView>
                </SafeAreaView>

                <SafeAreaView
                    style={styles.ShadowFeedbacks}>
                    <SafeAreaView
                        style={styles.Feedbacks}>
                        <Text
                            style={{
                                fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#606062", fontSize: 30,
                            }}>
                            PONTUAÇÃO DA ATIVIDADE
                        </Text>
                        <Text style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#61BE4B", fontSize: 28, marginLeft: 8
                        }}>{score}
                        </Text>
                        <Text style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#606062", fontSize: 28,
                        }}>/{questions.length}
                        </Text>
                        <FastImage
                            style={{
                                margin: 8,
                                width: 35,
                                height: 35
                            }}
                            source={checkIcon}>
                        </FastImage>
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        )
    }

    const wrongFeedbacks = () => {
        return (
            <SafeAreaView
                style={{
                    marginTop: 25,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    //backgroundColor: 'red',
                }}>

                <SafeAreaView>
                    <Text style={{ fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#606062", fontSize: 30, padding: 4 }}>
                        Não fique triste, errar faz parte do aprendizado. Vamos praticar novamente?
                    </Text>
                </SafeAreaView>

                <SafeAreaView
                    style={styles.ShadowFeedbacks2}>
                    <SafeAreaView
                        style={styles.Feedbacks2}>
                        <Text
                            style={{
                                fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#606062", fontSize: 30,
                            }}>
                            PONTUAÇÃO DA ATIVIDADE
                        </Text>
                        <Text style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "red", fontSize: 28, marginLeft: 8
                        }}>{score}
                        </Text>
                        <Text style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#606062", fontSize: 28,
                        }}>/{questions.length}
                        </Text>
                        <FastImage
                            style={{
                                margin: 8,
                                width: 35,
                                height: 35
                            }}
                            source={errorIcon}>
                        </FastImage>
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        )
    }

    const buttonsModal = () => {
        return (
            <SafeAreaView
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    padding: 5,
                    //backgroundColor: 'red',
                }}>

                <TouchableOpacity
                    onPress={restartQuiz}
                    style={styles.ShadowButtons1}>
                    <SafeAreaView
                        style={styles.Buttons1}>
                        <Text
                            style={{
                                fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "white", fontSize: 40,
                            }}>
                            RECOMEÇAR
                        </Text>
                    </SafeAreaView>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.ShadowButtons2}
                    onPress={() => navigation.navigate('Main')}>
                    <SafeAreaView
                        style={styles.Buttons2}>
                        <Text
                            style={{
                                fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "white", fontSize: 40,
                            }}>
                            CONTINUAR
                        </Text>
                    </SafeAreaView>
                </TouchableOpacity>
            </SafeAreaView>

        )
    }

    const renderModal = () => {
        if (score > (questions.length / 2)) {
            setScoreRigthModal(true)
        } else {
            setScoreWrongModal(true)
        }
    }

    const renderOptions = () => {
        return (

            questions[currentQuestionIndex].alternatives.map((option) =>

                <TouchableWithoutFeedback
                    onPress={() => selected(option.option)}
                    key={option.id}
                >
                    <Animatable.View
                        style={{
                            marginTop: '2%',
                            width: '42%',
                            height: '48%',
                            alignContent: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 7,
                            margin: '4%',
                            borderWidth: 4,
                            padding: '2.2%',
                            borderStyle: 'solid',
                            borderColor: currentOptionSelected != option.option
                                ? "#D2D3D5"
                                : "#FDC500",
                            backgroundColor: currentOptionSelected == option.option
                                ? "#FFFAE5"
                                : "#fff"
                        }}
                        animation={currentQuestionIndex == 0
                            ? "pulse"
                            : "bounceInRight"}
                        useNativeDriver>
                        {renderImages(option.image)}
                        <ContainerCircle>
                            {renderAlternatives(cont, option)}
                        </ContainerCircle>
                    </Animatable.View>
                </TouchableWithoutFeedback>
            )
        )
    }




    {/* Main */ }
    return (
        <Bgcontainer>
            {/* Header*/}
            {renderHeader()}
            {/* Level */}
            {renderLevel()}
            <Animatable.View style={{
                height: '72%',
                width: '100%',
                alignItems: 'center'
            }}
            >
                {renderQuestion()}
                <ImagesContainer2>
                    {/* Options */}
                    {renderOptions()}
                </ImagesContainer2>
            </Animatable.View>
            {/* Buttons */}
            <ButtonContainer>
                {renderJumpButton()}
                {renderButtonConfirm()}
            </ButtonContainer>
            {/* Show Right Score Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={scoreRigthModal}
            >
                <SafeAreaView style={{
                    flex: 1,
                    alignItems: 'center',
                    backgroundColor: '#fff'
                }}>
                    <Animatable.View
                        animation="pulse"
                        useNativeDriver
                        iterationCount="infinite">
                        <FastImage
                            style={{ height: 210, width: 328, marginTop: 30 }}
                            source={ativConcluida}
                        >
                        </FastImage>
                    </Animatable.View>
                    {rightFeedbacks()}
                    <SafeAreaView style={{
                        flex: 1,
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        //backgroundColor: 'blue'
                    }}>
                        {buttonsModal()}
                    </SafeAreaView>
                </SafeAreaView>
            </Modal>
            {/* Show Wrong Score Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={scoreWrongModal}
            >
                <SafeAreaView style={{
                    flex: 1,
                    alignItems: 'center',
                    backgroundColor: '#fff'
                }}>
                    <Animatable.View
                        animation="pulse"
                        useNativeDriver
                        iterationCount="infinite">
                        <FastImage
                            style={{ height: 212, width: 328, marginTop: 30 }}
                            source={tente}
                        >
                        </FastImage>
                    </Animatable.View>
                    {wrongFeedbacks()}
                    <SafeAreaView style={{
                        flex: 1,
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        //backgroundColor: 'blue'
                    }}>
                        {buttonsModal()}
                    </SafeAreaView>
                </SafeAreaView>
            </Modal>
            {/* Wrong Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showWrongModal}
            >
                <SafeAreaView style={{ flexDirection: 'column', justifyContent: 'flex-end', flex: 1 }}>
                    <SafeAreaView style={{
                        width: '100%',
                        height: '22%',
                        //opacity: 0.9,
                        backgroundColor: "#fEE0E2",
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                        <SafeAreaView style={{
                            marginTop: '5%',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <ImageModal source={errorIcon}></ImageModal>
                            <Text style={{
                                fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#E92C2A", fontSize: 32,
                            }}>  Resposta correta: {questions[currentQuestionIndex].correct_alternative}
                            </Text>

                        </SafeAreaView>

                        <SafeAreaView style={{

                            width: '100%',
                            height: '75%',
                            marginTop: '1%',
                            alignItems: 'center',
                            alignContent: 'center',
                        }}>
                            <TouchableWithoutFeedback
                                onPress={exitModal}
                            >
                                <View style={styles.ShadowWrongButton}>
                                    <StyleButtons
                                        bg={"#FF4B4C"}
                                        bordercolor={'#FF4B4C'}
                                        borderwidth={'0px'}>
                                        <Text style={{
                                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "white", fontSize: 32,
                                        }}>CONTINUAR</Text>
                                    </StyleButtons>
                                </View>
                            </TouchableWithoutFeedback>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
            </Modal>
            {/* Modal Right */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showRightModal}
            >
                <SafeAreaView style={{ flexDirection: 'column', justifyContent: 'flex-end', flex: 1 }}>
                    <SafeAreaView style={{
                        width: '100%',
                        height: '22%',
                        backgroundColor: "#D9FEB8",
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}>
                        <SafeAreaView style={{
                            marginTop: '5%',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#38752B", fontSize: 35,
                            }}>Você acertou!  </Text>
                            <ImageModal source={checkIcon}></ImageModal>
                        </SafeAreaView>

                        <SafeAreaView style={{

                            width: '100%',
                            height: '75%',
                            marginTop: '1%',
                            alignItems: 'center',
                            alignContent: 'center'
                        }}>
                            <TouchableWithoutFeedback
                                onPress={exitModal}
                            >
                                <View style={styles.ShadowRightButton}>
                                    <StyleButtons
                                        bg={"#61BE4B"}
                                        bordercolor={'#61BE4B'}
                                        borderwidth={'0px'}>
                                        <Text style={{
                                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "white", fontSize: 32,
                                        }}>CONTINUAR</Text>
                                    </StyleButtons>
                                </View>
                            </TouchableWithoutFeedback>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
            </Modal>
        </Bgcontainer>
    )
}

const styles = StyleSheet.create({
    LifeContainer: {
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        //backgroundColor: 'blue',
    },
    LifeText: {
        fontFamily: 'DINRoundPro-Medi',
        fontSize: 28,
        color: '#FC4848',
        //backgroundColor: 'yellow',
    },
    ShadowJumpButton: {
        marginTop: '3%',
        width: '40%',
        height: '70%',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: "#D2D3D5"
    },
    ShadowRightButton: {
        marginTop: '4%',
        width: '55%',
        height: '55%',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: "#38752B",
    },
    ShadowWrongButton: {
        marginTop: '4%',
        width: '55%',
        height: '55%',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: "#E92C2A",
    },
    ShadowConfirmButtonDisabled: {
        marginTop: '3%',
        width: '40%',
        height: '70%',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: "#606062"
    },
    ShadowConfirmButtonEnabled: {
        marginTop: '3%',
        width: '40%',
        height: '70%',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: '#DAA520'
    },
    QuestionsContainer: {
        alignItems: 'center',
        alignContent: 'space-between',
        width: '90%',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ff2'
    },
    QuestionsText: {
        fontFamily: 'GothamCondensed-Medium',
        fontSize: 28,
        marginTop: '2%'
    },
    ConfirmText: {
        fontFamily: "GothamCondensed-Medium",
        fontSize: 28,
        color: '#fff'
    },
    circle: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2
    },
    ShadowButtons1: {
        width: '90%',
        height: 65,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 15,
        backgroundColor: "#DAA520",
        margin: 8
    },
    Buttons1: {
        width: '100%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#FDC500',
    },
    ShadowButtons2: {
        width: '90%',
        height: 65,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 15,
        backgroundColor: "#236A79",
        margin: 8
    },
    Buttons2: {
        width: '100%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#3CB1C7',
    },
    ShadowFeedbacks: {
        width: '85%',
        height: 70,
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
    ShadowFeedbacks2: {
        marginTop: 30,
        width: '85%',
        height: 70,
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
    IconImages: {
        margin: 8,
        width: 40,
        height: 40
    },
    XpText: {
        fontFamily: 'DINRoundPro-Medi',
        fontSize: 28,
        color: '#FDC500',
        textAlign: 'justify'
    }
});