//import bibliotecas
import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    Animated,
    StyleSheet,
    ImageBackground,
    TouchableWithoutFeedback,
    Text,
    FlatList
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';
import { createStackNavigator } from '@react-navigation/stack';

// import estilos
import {
    Bgcontainer,
    DivisorLine2,
    Div2,
    ImagesFeeds,
    IconLesson,
    IconImages
} from '../../components/style'

// import ícones
import iconeLife from '../../assets/imgs/iconeLife.png';
import iconeXp from '../../assets/imgs/iconeXp.png';
import iconeBatutas from '../../assets/imgs/iconeBatutas.png';
import iconeBatuta from '../../assets/imgs/iconeBatuta.png';
import licao01 from '../../assets/imgs/licao01.png';
import licao02 from '../../assets/imgs/licao02.png';
import iconeStar from '../../assets/imgs/iconeStar.png';
import bgViolao from '../../assets/imgs/bgViolao.png';
import feed01 from '../../assets/imgs/feed01.png';
import feed02 from '../../assets/imgs/feed02.png';
import feed03 from '../../assets/imgs/feed03.png';
import feed04 from '../../assets/imgs/feed04.png';
import feed05 from '../../assets/imgs/feed05.png';
import feed06 from '../../assets/imgs/feed06.png';

// import dados estáticos
import staticFeeds from '../../data/Feeds.json'


export default function App({ navigation }) {

    const allFeeds = staticFeeds.feeds;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const ButtonRef = useRef()
    const Button2Ref = useRef()
    const Button3Ref = useRef()
    const [lifePoints, setlifePoints] = useState(5);
    const [xpPoints, setxpPoints] = useState(0);
    const [batutaPoints, setbatutaPoints] = useState(0);
    const [showOptionsModal, setShowOptionsModal] = useState(false);
    const [contador, setContador] = useState(0);
    const [titulo, setTitulo] = useState(null);
    const Stack = createStackNavigator();

    const renderLife = () => {
        return (
            <Animatable.View style={styles.LifeContainer}>
                <IconImages
                    source={iconeLife}>
                </IconImages>
                {renderTextLife()}
            </Animatable.View>
        )
    }

    const renderTextLife = () => {
        return (
            <Animatable.Text style={styles.LifeText}>
                {lifePoints}
            </Animatable.Text>
        )
    }

    const renderXp = () => {
        return (
            <Animatable.View style={styles.XpContainer}>
                <IconImages
                    source={iconeXp}>
                </IconImages>
                {renderTextXp()}
            </Animatable.View>
        )
    }

    const renderTextXp = () => {
        return (
            <SafeAreaView style={{ padding: 2 }}>
                <Animatable.Text style={styles.XpText}>
                    {xpPoints}
                </Animatable.Text>
            </SafeAreaView>
        )
    }

    const renderBatutas = () => {
        return (
            <Animatable.View style={styles.BatutasContainer}>
                <IconImages
                    source={iconeBatutas}>
                </IconImages>
                {renderTextBatutas()}
            </Animatable.View>
        )
    }

    const renderTextBatutas = () => {
        return (
            <SafeAreaView style={{ padding: 2 }}>
                <Animatable.Text style={styles.BatutasText}>
                    {batutaPoints}
                </Animatable.Text>
            </SafeAreaView>
        )
    }

    const renderBatuta = () => {
        return (
            <Animatable.View style={styles.BatutaContainer}>
                <IconImages
                    source={iconeBatuta}>
                </IconImages>
            </Animatable.View>
        )
    }

    const renderHeader = () => {
        return (
            <SafeAreaView style={styles.HeaderContainer}>
                {renderBatuta()}
                {renderBatutas()}
                {renderXp()}
                {renderLife()}
            </SafeAreaView>
        )
    }

    const renderDivisor = () => {
        return (
            <DivisorLine2></DivisorLine2>
        )
    }

    // Numero da licao
    const renderLessonTitle = (lesson, show) => {
        switch (lesson) {
            case ("1"):
                if (show == "true") {
                    return (
                        <Animatable.View style={styles.LessonContainer}>
                            <IconLesson source={licao01}></IconLesson>
                        </Animatable.View>
                    )
                    break;
                }
            case ("2"):
                if (show == "true") {
                    return (
                        <Animatable.View style={styles.LessonContainer}>
                            <IconLesson source={licao02}></IconLesson>
                        </Animatable.View>
                    )
                    break;
                }
        }
    }

    const renderStar = () => {
        return (
            <FastImage style={{ height: 35, width: 35, marginRight: '5%' }}
                source={iconeStar}>
            </FastImage>
        )
    }

    {/* Config Progress Bar */ }
    const [progress, setProgress] = useState(new Animated.Value(0));
    let percent = ((100) / 3);
    percent = Math.round(percent)
    percent.toString()
    percent = percent + "%"
    const progressAnim2 = progress.interpolate({
        inputRange: [0, 3 - 1],
        outputRange: ['90%', '90%']
    })
    const progressAnim = progress.interpolate({
        inputRange: [0, 3 - 1],
        outputRange: [percent, '100%']
    })
    const renderProgressBar = (progress) => {
        if (progress == "true") {
            return (
                <Animatable.View style={styles.ProgressContainer}>
                    {renderStar()}
                    <SafeAreaView style={{
                        width: '75%',
                        height: 20,
                        borderRadius: 5,
                        backgroundColor: '#d1d3d5',

                    }}>
                        <Animated.View style={[{
                            height: 20,
                            borderRadius: 5,
                            backgroundColor: '#61BE4B',
                        }, {
                            width: progressAnim
                        }]}>
                            <Animated.View style={[{
                                height: 6,
                                borderRadius: 1,
                                marginTop: 4,
                                alignSelf: 'center',
                                backgroundColor: '#A1D995',
                            }, {
                                width: progressAnim2
                            }]}>
                            </Animated.View>
                        </Animated.View>
                    </SafeAreaView>
                </Animatable.View>
            )
        }
    }

    const renderIconsFeeds = (icons) => {
        switch (icons) {
            case ("feed01.png"):
                return (
                    <ImagesFeeds
                        source={feed01}>
                    </ImagesFeeds>
                )
                break;
            case ("feed02.png"):
                return (
                    <ImagesFeeds
                        source={feed02}>
                    </ImagesFeeds>
                )
                break;
            case ("feed03.png"):
                return (
                    <ImagesFeeds
                        source={feed03}>
                    </ImagesFeeds>
                )
                break;
            case ("feed04.png"):
                return (
                    <ImagesFeeds
                        source={feed04}>
                    </ImagesFeeds>
                )
                break;
            case ("feed05.png"):
                return (
                    <ImagesFeeds
                        source={feed05}>
                    </ImagesFeeds>
                )
                break;
            case ("feed06.png"):
                return (
                    <ImagesFeeds
                        source={feed06}>
                    </ImagesFeeds>
                )
                break;
        }
    }

    const renderBoardFeeds = (title) => {
        return (
            <SafeAreaView style={styles.ShadowBoardFeeds}>
                <SafeAreaView style={styles.BoardFeeds}
                    bg={"#fff"}
                    bordercolor={'#D2D3D5'}
                    borderwidth={'2px'}>
                    <Text style={styles.TextFeeds}>
                        {title}
                    </Text>
                </SafeAreaView>
            </SafeAreaView>
        )
    }

    const renderFeeds = () => {
        return (
            <FlatList
                data={allFeeds}
                keyExtractor={item => String(item._id)}
                renderItem={({ item }) => <ListItem lesson={item.lesson} feeds={item.items} progress={item.progress} show={item.show_lesson}></ListItem>}
            ></FlatList>
        )
    }

    function ListItem({ lesson, feeds, progress, show }) {
        return (

            <Animatable.View style={styles.BgContainer}
                animation={currentOptionSelected == null
                    ? "bounceInUp"
                    : ""}>
                {renderLessonTitle(lesson, show)}
                {renderProgressBar(progress)}
                <ImageBackground
                    style={styles.ViolaoBackground}
                    source={bgViolao}>
                    {feeds.map((item) =>
                        <TouchableWithoutFeedback
                            onPress={() => selected(item.title)}
                            key={item.id}
                        >
                            <Animatable.View
                                animation=""
                                useNativeDriver
                                ref={ButtonRef}
                                style={{
                                    alignItems: 'center',
                                    margin: '2%', //backgroundColor:'yellow'
                                }}
                            >
                                {renderIconsFeeds(item.icon)}
                                {renderBoardFeeds(item.title)}
                                {renderModal(item.title, item.content)}
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                    )}
                </ImageBackground>
            </Animatable.View>
        )
    }

    const Modal = (title, content) => {
        return (

            <Animatable.View
                animation={"bounceIn"}
                useNativeDriver
                style={{
                    width: '115%',
                    height: '25%',
                    backgroundColor: "#236A79",
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    alignContent: 'center',
                    flexDirection: 'column',
                    borderRadius: 10,

                }}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate(content)}
                >
                    <SafeAreaView style={{

                        width: '90%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#3CB1C7',
                        borderRadius: 5,
                        margin: 2
                    }}>
                        <Text style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#fff", fontSize: 25,
                            padding: 5
                        }}>CONTEÚDO</Text>

                    </SafeAreaView>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate(title)}
                >
                    <SafeAreaView style={{
                        width: '90%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        margin: 2
                    }}>
                        <Text style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#236A79", fontSize: 25,
                            padding: 5
                        }}>PRATICAR + <Text style={{ color: "#FDC500" }}>10XP</Text></Text>
                    </SafeAreaView>
                </TouchableWithoutFeedback>

            </Animatable.View>


        )

    }

    const renderModal = (title, content) => {
        if (showOptionsModal == true && currentOptionSelected == "Introdução" && title == "Introdução") {
            return (
                Modal(title, content)
            )
        }

        if (showOptionsModal == true && currentOptionSelected == "Sons Musicais" && title == "Sons Musicais") {
            return (
                Modal(title, content)
            )
        }

        if (showOptionsModal == true && currentOptionSelected == "Pauta e Clave" && title == "Pauta e Clave") {
            return (
                Modal(title, content)
            )
        }

        if (showOptionsModal == true && currentOptionSelected == "Figuras de Notas" && title == "Figuras de Notas") {
            return (
                Modal(title, content)
            )
        }

        if (showOptionsModal == true && currentOptionSelected == "Figuras de Pausas" && title == "Figuras de Pausas") {
            return (
                Modal(title, content)
            )
        }

        if (showOptionsModal == true && currentOptionSelected == "Duração dos Valores" && title == "Duração dos Valores") {
            return (
                Modal(title, content)
            )
        }
    }

    const selected = (selecao) => {
        setTitulo(selecao)
        setCurrentOptionSelected(selecao)
        if (contador % 2 == 0) {
            setShowOptionsModal(true)
        } else {
            setShowOptionsModal(false)
        }
        setContador(contador + 1)
    }


    {/* Main */ }
    return (
        <Bgcontainer>
            {/* Header*/}
            {renderHeader()}
            {/* Divisor */}
            {renderDivisor()}
            {/* Feeds */}
            {renderFeeds()}
        </Bgcontainer>
    );
}

const styles = StyleSheet.create({
    HeaderContainer: {
        marginTop: '1%',
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8
        //backgroundColor: 'red'
    },
    FooterContainer: {
        marginTop: '1%',
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',
        padding: 8,
        //backgroundColor: 'blue'
    },
    ProgressContainer: {
        marginTop: '2%',
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        //backgroundColor: 'blue',
    },
    BgContainer: {
        padding: 20,
        marginVertical: '3%',
        width: '100%',
        alignItems: 'center',
        //backgroundColor: 'red',
    },
    ViolaoBackground: {
        resizeMode: 'contain',
        height: 411,
        width: 360,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignContent: 'center',
        //backgroundColor: 'yellow'
    },
    LessonContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'green'
    },
    LifeContainer: {
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    LifeText: {
        fontFamily: 'DINRoundPro-Medi',
        fontSize: 28,
        color: '#FC4848',
    },
    XpContainer: {
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    XpText: {
        fontFamily: 'DINRoundPro-Medi',
        fontSize: 28,
        color: '#FDC500',
        textAlign: 'justify'
    },
    BatutasContainer: {
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    BatutasText: {
        fontFamily: 'DINRoundPro-Medi',
        fontSize: 28,
        color: '#FC48A2',
        textAlign: 'justify',
    },
    BatutaContainer: {
        width: '14%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    HomeContainer: {
        alignItems: 'center',
    },
    PerfilContainer: {
        alignItems: 'center',
    },
    EloContainer: {
        alignItems: 'center',
    },
    ShadowBoardFeeds: {
        marginTop: '5%',
        width: 162,
        height: 45,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 8,
        backgroundColor: "#D2D3D5"
    },
    BoardFeeds: {
        width: '100%',
        height: '94%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: "#fff",
        borderColor: '#D2D3D5',
        borderWidth: 2
    },
    TextFeeds: {
        fontSize: 25,
        fontFamily: 'GothamCondensed-Medium',
        textAlign: 'center'
    }
});