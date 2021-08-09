import React, { useState, useRef } from 'react';
import {
    Bgcontainer,
    QuestionText,
    ImageLife,
    ImageQuestions,
    ButtonContainer,
    JumpText,
    HeaderContainer,
    CloseButtonContainer,
    StyleButtons,
    ImagesContainer2,
    ContainerCircle
} from '../../components/style'
import iconeX from '../../assets/imgs/iconeX.png';
import iconeLife from '../../assets/imgs/iconeLife.png';
import claveDo from '../../assets/imgs/claveDo.png'
import claveSol from '../../assets/imgs/claveSol.png'
import claveFa from '../../assets/imgs/claveFa.png'
import signal from '../../assets/imgs/signal.png'
import semibreve from '../../assets/imgs/semibreve.png'
import minima from '../../assets/imgs/minima.png'
import colcheia from '../../assets/imgs/colcheia.png'
import semicolcheia from '../../assets/imgs/semicolcheia.png'
import seminPontuada from '../../assets/imgs/seminPontuada.png'
import minPontuada from '../../assets/imgs/minPontuada.png'
import seminima from '../../assets/imgs/seminima.png'
import batuta from '../../assets/imgs/batuta.png'
import staticData from '../../data/Alternativas.json'
import checkIcon from '../../assets/imgs/checkIcon.png'
import errorIcon from '../../assets/imgs/errorIcon.png'
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
import DivFacil from '../../components/DivFacil';
import DivMedio from '../../components/DivMedio';
import DivDificil from '../../components/DivDificil';


export default function App() {

    const ButtonRef = useRef()
    const Button2Ref = useRef()
    const allQuestions = staticData.data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [score, setScore] = useState(0);
    const [lifePoints, setlifePoints] = useState(5);
    const [animLife, setAnimLife] = useState(false);
    const [animQuestions, setAnimQuestions] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [showLifeModal, setShowLifeModal] = useState(false);
    const [showRightModal, setShowRightModal] = useState(false);
    const [showWrongModal, setShowWrongModal] = useState(false);



    const renderQuestion = () => {
        return (
            <View style={{
                alignItems: 'center',
                marginTop: 2
            }}>
                <QuestionText>
                    {allQuestions[currentQuestionIndex].question}
                </QuestionText>
            </View>
        )
    }

    const renderQuestion2 = () => {
        return (
            <Animatable.View style={{
                alignItems: 'center',
                marginTop: 2
            }}
                animation={(currentQuestionIndex == 0)
                    ? "pulse"
                    : "bounceInRight"}
                useNativeDriver>
                <QuestionText>
                    {allQuestions[currentQuestionIndex].question}
                </QuestionText>
            </Animatable.View>
        )
    }

    const handleNext = () => {
        if (currentQuestionIndex == allQuestions.length - 1) {
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
            Animated.timing(progress, {
                toValue: currentQuestionIndex,
                duration: 1000,
                useNativeDriver: false
            }).start();
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setAnimQuestions(true);
            Animated.timing(progress, {
                toValue: currentQuestionIndex + 1,
                duration: 1000,
                useNativeDriver: false
            }).start();
        }
    }

    const restartQuiz = () => {
        setShowScoreModal(false);
        setShowLifeModal(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
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
        handleNext();
    }

    let cont = 0;
    const renderImages = (opcao) => {
        cont = cont + 1
        switch (opcao) {
            case ("claveDo.png"):
                return (
                    <ImageQuestions source={claveDo}></ImageQuestions>
                )
                break;
            case ("claveSol.png"):
                return (
                    <ImageQuestions source={claveSol}></ImageQuestions>
                )
                break;
            case ("claveFa.png"):
                return (
                    <ImageQuestions source={claveFa}></ImageQuestions>
                )
                break;
            case ("signal.png"):
                return (
                    <ImageQuestions source={signal}></ImageQuestions>
                )
                break;
            case ("semibreve.png"):
                return (
                    <ImageQuestions source={semibreve}></ImageQuestions>
                )
                break;
            case ("minima.png"):
                return (
                    <ImageQuestions source={minima}></ImageQuestions>
                )
            case ("seminima.png"):
                return (
                    <ImageQuestions source={seminima}></ImageQuestions>
                )
                break;
            case ("colcheia.png"):
                return (
                    <ImageQuestions source={colcheia}></ImageQuestions>
                )
                break;
            case ("semicolcheia.png"):
                return (
                    <ImageQuestions source={semicolcheia}></ImageQuestions>
                )
                break;
            case ("seminPontuada.png"):
                return (
                    <ImageQuestions source={seminPontuada}></ImageQuestions>
                )
                break;
            case ("minPontuada.png"):
                return (
                    <ImageQuestions source={minPontuada}></ImageQuestions>
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
    const renderOptions = () => {
        return (

            allQuestions[currentQuestionIndex].options.map((option) =>

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

    const selected = (selecao) => {
        setCurrentOptionSelected(selecao)
        setAnimLife(false)
    }


    const validateAnswer = (selectedOption) => {

        let correct_option = allQuestions[currentQuestionIndex].correct_option;
        setCorrectOption(correct_option);
        if (selectedOption == correct_option) {
            //Set Score
            setScore(score + 1)
            // Show Right Modal
            setShowRightModal(true);
        } else {
            // Life Points
            setlifePoints(lifePoints - 1);
            setAnimLife(true)
            // Show Wrong Modal
            setShowWrongModal(true);
        }
        //handleNext()
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
                onPress={() => ButtonRef.current.pulse(validateAnswer(currentOptionSelected))}
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

    const renderCloseButton = () => {
        return (

            <CloseButtonContainer>
                <Image style={{ width: 25, height: 26 }}
                    source={iconeX}>
                </Image>
            </CloseButtonContainer>

        )
    }

    {/* Config Progress Bar */ }
    const [progress, setProgress] = useState(new Animated.Value(0));
    let percent = ((100) / allQuestions.length);
    percent = Math.round(percent)
    percent.toString()
    percent = percent + "%"
    const progressAnim2 = progress.interpolate({
        inputRange: [0, allQuestions.length - 1],
        outputRange: ['90%', '90%']
    })

    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length - 1],
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
                <ImageLife
                    source={iconeLife}>
                </ImageLife>
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

        let level = allQuestions[currentQuestionIndex].levels
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
    const renderLogo = () => {
        return (
            <Image source={batuta}
                style={{ height: 35, width: 35, marginTop: 6 }}>
            </Image>
        )
    }

    {/* Main */ }
    return (

        <Bgcontainer>
            {/* Header*/}
            {renderHeader()}
            {/* Level */}
            {renderLevel()}
            {/* Question */}
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
                {/*{renderLogo()}*/}
                {renderButtonConfirm()}
            </ButtonContainer>

            {/* Score Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showScoreModal}
            >
                <SafeAreaView style={{
                    flex: 1,
                    backgroundColor: "#FDC500",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <SafeAreaView style={{
                        backgroundColor: "#fff",
                        width: '90%',
                        borderRadius: 20,
                        padding: 20,
                        alignItems: 'center'
                    }}>
                        <QuestionText>{score > (allQuestions.length / 2) ? 'Parabéns!' : 'Você perdeu!'}</QuestionText>

                        <SafeAreaView style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginVertical: 20
                        }}>
                            <Text style={{
                                fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "red", fontSize: 28, marginTop: 2
                            }}>{score}</Text>
                            <Text style={{
                                fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "black", fontSize: 28, marginTop: 2
                            }}>/{allQuestions.length}</Text>
                        </SafeAreaView>
                        {/* Retry Quiz button */}
                        <TouchableOpacity
                            onPress={restartQuiz}
                            style={{
                                backgroundColor: "#FDC500",
                                padding: 20, width: '100%', borderRadius: 20
                            }}>
                            <Text style={{
                                fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "white", fontSize: 35,
                            }}>RECOMEÇAR</Text>
                        </TouchableOpacity>

                    </SafeAreaView>

                </SafeAreaView>
            </Modal>
            {/* Wrong Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showWrongModal}
            >
                <SafeAreaView style={{
                    marginTop: '150%',
                    width: '100%',
                    height: '20%',
                    backgroundColor: "#fEE0E2",
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <SafeAreaView style={{
                        marginTop: '2%',
                        width: '100%',
                        alignItems: 'center',
                        alignContent: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#E92C2A", fontSize: 35,
                        }}>Você errou!   </Text>
                        <Image source={errorIcon} style={{ height: 35, width: 35 }}></Image>
                    </SafeAreaView>

                    <SafeAreaView style={{
                        width: '100%',
                        height: '50%', marginTop: '1%', alignItems: 'center', alignContent: 'center', justifyContent: 'center'
                    }}>
                        <TouchableWithoutFeedback
                            onPress={exitModal}
                        >
                            <View style={styles.ShadowWrongButton}>
                                <StyleButtons
                                    bg={"#FF4B4C"}
                                    bordercolor={'#FF4B4C'}
                                    borderwidth={'2px'}>
                                    <Text style={{
                                        fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "white", fontSize: 35,
                                    }}>CONTINUAR</Text>
                                </StyleButtons>
                            </View>
                        </TouchableWithoutFeedback>
                    </SafeAreaView>
                </SafeAreaView>
            </Modal>

            {/* Modal Right */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showRightModal}
            >
                <SafeAreaView style={{
                    marginTop: '150%',
                    width: '100%',
                    height: '20%',
                    backgroundColor: "#D9FEB8",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <SafeAreaView style={{
                        marginTop: '2%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#38752B", fontSize: 35,
                        }}>Você acertou!   </Text>
                        <Image source={checkIcon} style={{ height: 35, width: 35 }}></Image>
                    </SafeAreaView>

                    <SafeAreaView style={{
                        width: '100%',
                        height: '50%', marginTop: '1%', alignItems: 'center', alignContent: 'center', justifyContent: 'center'
                    }}>
                        <TouchableWithoutFeedback
                            onPress={exitModal}
                        >
                            <View style={styles.ShadowRightButton}>
                                <StyleButtons
                                    bg={"#61BE4B"}
                                    bordercolor={'#61BE4B'}
                                    borderwidth={'2px'}>
                                    <Text style={{
                                        fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "white", fontSize: 32,
                                    }}>CONTINUAR</Text>
                                </StyleButtons>
                            </View>
                        </TouchableWithoutFeedback>
                    </SafeAreaView>
                </SafeAreaView>
            </Modal>
        </Bgcontainer >

    );
}

const styles = StyleSheet.create({
    LifeContainer: {
        width: '14%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    LifeText: {
        fontFamily: 'DINRoundPro-Medi',
        fontSize: 28,
        marginTop: '2%',
        color: '#FC4848',
        textAlign: 'justify',
        flexDirection: 'row',
        flexWrap: 'wrap'
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
        width: '80%',
        height: '90%',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: "#38752B",
    },
    ShadowWrongButton: {

        width: '80%',
        height: '90%',
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
        backgroundColor: '#846214'
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
    }
});