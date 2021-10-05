import React, { useState, useRef } from 'react';
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

// import dados estáticos
import staticData from '../../../data/Alternativas.json'

// import bibliotecas
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
import FastImage from 'react-native-fast-image';


export default function App() {
    const ButtonRef = useRef()
    const Button2Ref = useRef()
    const allQuestions = staticData.data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [lifePoints, setlifePoints] = useState(5);
    const [animLife, setAnimLife] = useState(false);
    const [animQuestions, setAnimQuestions] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(true);
    const [showLifeModal, setShowLifeModal] = useState(false);
    const [showRightModal, setShowRightModal] = useState(false);
    const [showWrongModal, setShowWrongModal] = useState(false);


    const bottomRecomecar = () => {
        return (
            <SafeAreaView
            style={{
                alignItems: 'center',
                marginTop: 100,
                width: '100%',
                backgroundColor: 'red'
            }}>

                <TouchableOpacity
                    style={{
                        backgroundColor: "#FDC500",
                        padding: 20,     
                        width:'85%',
                        borderRadius: 20,     
                    }}>
                    <Text 
                    style={{
                        fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "white", fontSize: 35,
                    }}>
                        RECOMEÇAR
                    </Text>
                </TouchableOpacity>
               

            </SafeAreaView>
        )
    }

    return(

        <Modal
                animationType="slide"
                transparent={true}
                visible={showScoreModal}
            >
                <SafeAreaView style={{
                    flex: 1,
                    alignItems: 'center',
                    backgroundColor: 'blue'
                }}>
                    <Animatable.View>
                        <FastImage 
                        style={{height: 210, width: 300, marginTop: 25}}
                        source={ativConcluida}
                        >
                        </FastImage>
                    </Animatable.View>

                    {bottomRecomecar()}

                </SafeAreaView>
        </Modal>
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
        marginTop: '1%',
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
    }
});