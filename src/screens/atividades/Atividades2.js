import React, { useState } from 'react';
import {
    Bgcontainer,
    QuestionsContainer,
    QuestionText,
    QuestionsButton2,
    ImageQuestions,
    ButtonContainer,
    JumpButton,
    JumpText,
    ConfirmButton,
    ConfirmText,
    HeaderContainer,
    CloseButtonContainer
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
    const [correctOption, setCorrectOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showScoreModal, setShowScoreModal] = useState(false);

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
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
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
                <QuestionsButton2
                    onPress={() => selected(option.id)}
                    key={option.option}
                    style={({ pressed }) => [{
                        borderColor: pressed ? '#FDC500' : '#D2D3D5',
                        backgroundColor: pressed ? '#FFFAE5' : '#fff'                     
                    }]
                    }
                >
                    {renderImages(option.image)}
                </QuestionsButton2>
            )
        )
    }


    const selected = (selecao) => {
        setCurrentOptionSelected(selecao);
    }

    const validateAnswer = (selectedOption) => {

        let correct_option = allQuestions[currentQuestionIndex].correct_option;
        setCorrectOption(correct_option);
        if (selectedOption == correct_option) {
            //Set Score
            setScore(score + 1)
        }
        if (selectedOption != null) {
            handleNext()
        }
        else {
            Alert.alert('Escolha uma opção!')
        }

    }

    const renderButtons = () => {
        return (
            <ButtonContainer>
                <JumpButton onPress={handleNext}>
                    <JumpText> PULAR </JumpText>
                </JumpButton>
                <ConfirmButton onPress={() => validateAnswer(currentOptionSelected)}>
                    <ConfirmText> CONFIRMAR </ConfirmText>
                </ConfirmButton>
            </ButtonContainer>
        )
    }

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
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
            {renderButtons()}
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
        </Bgcontainer>

    );
}