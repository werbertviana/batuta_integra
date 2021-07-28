import React, { useState } from 'react';
import {
    Bgcontainer,
    QuestionsContainer,
    QuestionText,
    QuestionsButton,
    ImageQuestions,
    ButtonContainer,
    JumpButton,
    JumpText,
    ConfirmButton,
    ConfirmText,
    HeaderContainer,
    CloseButtonContainer,
    LifeText
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

import data from '../../data/Alternativas'
import {
    SafeAreaView,
    Modal,
    TouchableOpacity,
    Text,
    Animated,
    Image,
    Alert,
} from 'react-native';
import DivFacil from '../../components/DivFacil';
import DivMedio from '../../components/DivMedio';
import DivDificil from '../../components/DivDificil';


export default function App() {
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [colorSelected, setColorSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [score, setScore] = useState(0);
    const [lifePoints, setlifePoints] = useState(5);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [showLifeModal, setShowLifeModal] = useState(false);


    const renderQuestion = () => {
        return (
            <QuestionText>{allQuestions[currentQuestionIndex].question}</QuestionText>
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
            setColorSelected(null);
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
        setColorSelected(null);
        setlifePoints(5);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const exitModal = () => {
        setShowLifeModal(false);
    }

    const renderImages = (opcao) => {
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

    const renderOptions = () => {
        return (
            allQuestions[currentQuestionIndex].options.map((option) =>
                <QuestionsButton
                    onPress={() => selected(option.id)}
                    key={option.option}
                    style={{
                        borderColor: colorSelected != option.id
                            ? "#D2D3D5"
                            : "#FDC500",
                        backgroundColor: colorSelected == option.id
                            ? "#FFFAE5"
                            : "#fff"
                    }}
                >
                    {renderImages(option.image)}
                </QuestionsButton>
            )
        )
    }



    const selected = (selecao) => {
        setCurrentOptionSelected(selecao)
        setColorSelected(selecao)
    }

    const validateAnswer = (selectedOption) => {

        let correct_option = allQuestions[currentQuestionIndex].correct_option;
        setCorrectOption(correct_option);
        if (selectedOption == correct_option) {
            //Set Score
            setScore(score + 1)
        } else {
            // Life Points
            setlifePoints(lifePoints - 1);
            // Show Life Modal
            //setShowLifeModal(true);
        }
        if (selectedOption != null) {
            handleNext()
        }

    }

    const renderButtonJump = () => {
        return (

            <JumpButton onPress={handleNext}>
                <JumpText> PULAR </JumpText>
            </JumpButton>
        )

    }

    const renderButtonConfirm = () => {

        if (currentOptionSelected == null) {

            return (
                <ConfirmButton
                    bg={"#D2D3D5"}
                    disabled={true}
                >
                    <ConfirmText colorText={"#606062"}> CONFIRMAR </ConfirmText>
                </ConfirmButton>
            )
        } else {
            return (
                <ConfirmButton
                    bg={"#FDC500"}
                    disabled={false}
                    onPress={() => validateAnswer(currentOptionSelected)}>
                    <ConfirmText colorText={"#fff"}> CONFIRMAR </ConfirmText>
                </ConfirmButton>
            )
        }

    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    let percent = ((100) / allQuestions.length);
    percent = Math.round(percent)
    percent.toString()
    percent = percent + "%"
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length - 1],
        outputRange: [percent, '100%']
    })

    const renderHeader = () => {
        return (
            <HeaderContainer>
                <CloseButtonContainer>
                    <Image style={{ width: 25, height: 26 }}
                        source={iconeX}>
                    </Image>
                </CloseButtonContainer>

                {/* Progress Bar */}
                <SafeAreaView style={{
                    width: '70%',
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

                    </Animated.View>

                </SafeAreaView>

                <Image style={{ width: 25, height: 47 }}
                    source={iconeLife}>
                </Image>
                <LifeText>{lifePoints}</LifeText>
            </HeaderContainer>
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

    return (

        <Bgcontainer>
            {/* Header + Progress Bar*/}
            {renderHeader()}

            {/* Level */}
            {renderLevel()}
            {/* Question */}
            {renderQuestion()}

            <QuestionsContainer>
                {/* Options */}
                {renderOptions()}

            </QuestionsContainer>
            {/* Buttons */}
            <ButtonContainer>
                {renderButtonJump()}
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
            {/* Life Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showLifeModal}
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
                        <QuestionText>Você errou e perdeu Pontos de Vida!</QuestionText>

                        <SafeAreaView style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginVertical: 20
                        }}>
                            <QuestionText> Pontos de Vida:</QuestionText>
                            <Text style={{
                                fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "red", fontSize: 28, marginTop: 2
                            }}> {lifePoints}</Text>
                        </SafeAreaView>
                        {/* Retry Quiz button */}
                        <TouchableOpacity
                            onPress={exitModal}
                            style={{
                                backgroundColor: "#FDC500",
                                padding: 20, width: '100%', borderRadius: 20
                            }}>
                            <Text style={{
                                fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "white", fontSize: 35,
                            }}>FECHAR</Text>
                        </TouchableOpacity>

                    </SafeAreaView>

                </SafeAreaView>
            </Modal>
        </Bgcontainer>

    );
}