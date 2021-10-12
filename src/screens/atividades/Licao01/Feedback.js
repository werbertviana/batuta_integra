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

    const feedbacks = () => {
        return (
            <SafeAreaView
            style={{
                marginTop: 25,
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
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#A9ABAE", fontSize: 30,
                        }}>
                           XP DA ATIVIDADE
                        </Text>
                    </SafeAreaView>
                </SafeAreaView>

                <SafeAreaView
                style={styles.ShadowFeedbacks}>
                    <SafeAreaView
                    style={styles.Feedbacks}>
                        <Text 
                        style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#A9ABAE", fontSize: 30,
                        }}>
                            PONTUAÇÃO DA ATIVIDADE
                        </Text>
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>       
        )
    }
    
    
    const buttons = () => {
        return (
            <SafeAreaView
            style={{
                marginTop: 25,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                //backgroundColor: 'red',
            }}>

                <TouchableOpacity
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
                style={styles.ShadowButtons2}>
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

   

    return(

        <Modal
                animationType="slide"
                transparent={true}
                visible={showScoreModal}
            >
                <SafeAreaView style={{
                    flex: 1,
                    alignItems: 'center',
                    //backgroundColor: 'blue'
                }}>
                    <Animatable.View
                     animation = "pulse"
                     useNativeDriver
                     iterationCount= "infinite">
                        <FastImage 
                        style={{height: 210, width: 300, marginTop: 30}}
                        source={ativConcluida}
                        >
                        </FastImage>
                    </Animatable.View>
                    {feedbacks()}
                    {buttons()}

                </SafeAreaView>
        </Modal>
    )
    
}

const styles = StyleSheet.create({
    ShadowButtons1: {
        width:'90%',
        height: 75,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 20,
        backgroundColor: "#DAA520",
        margin: 8
    },
    Buttons1: {
        width: '100%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#FDC500',
    },
    ShadowButtons2: {
        width:'90%',
        height: 75,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 20,
        backgroundColor: "#236A79",
        margin: 8
    },
    Buttons2: {
        width: '100%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#3CB1C7',
    },
    ShadowFeedbacks: {
        width:'82%',
        height: 75,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 12,
        backgroundColor: '#D2D3D5',
        marginRight: 20,
        margin: 8
    },
    Feedbacks: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#FFF',
        marginLeft: 15,
        marginTop: -4,
        borderWidth: 2,
        borderColor:'#D2D3D5'
    }
   
});