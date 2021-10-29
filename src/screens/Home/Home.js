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
import licao02Off from '../../assets/imgs/licao02Off.png';
import iconeStar from '../../assets/imgs/iconeStar.png';
import bgViolao from '../../assets/imgs/bgViolao.png';
import feed01On from '../../assets/imgs/feed01On.png';
import feed02On from '../../assets/imgs/feed02On.png';
import feed03On from '../../assets/imgs/feed03On.png';
import feed04On from '../../assets/imgs/feed04On.png';
import feed05On from '../../assets/imgs/feed05On.png';
import feed06On from '../../assets/imgs/feed06On.png';
import feed01Off from '../../assets/imgs/feed01Off.png';
import feed02Off from '../../assets/imgs/feed02Off.png';
import feed03Off from '../../assets/imgs/feed03Off.png';
import feed04Off from '../../assets/imgs/feed04Off.png';
import feed05Off from '../../assets/imgs/feed05Off.png';
import feed06Off from '../../assets/imgs/feed06Off.png';
import lock from '../../assets/imgs/lock.png';
// import dados estáticos
import staticFeeds from '../../data/Feeds.json'


export default function App({ navigation }) {

    const allFeeds = staticFeeds.feeds;
    const feeds01 = [];
    feeds01.push(allFeeds[0]);
    const feeds02 = [];
    feeds02.push(allFeeds[0]);
    feeds02.push(allFeeds[1]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const ButtonRef = useRef()
    const Button2Ref = useRef()
    const Button3Ref = useRef()
    const [lifePoints, setlifePoints] = useState(5);
    const [xpPoints, setxpPoints] = useState(0);
    const [batutaPoints, setbatutaPoints] = useState(0);
    const [showOptionsModal, setShowOptionsModal] = useState(false);
    const [showOptionsModal2, setShowOptionsModal2] = useState(false);
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);
    const [textColor, setTextColor] = useState(false);
    const [showFeed01, setShowFeed01] = useState(true);
    const [showFeed02, setShowFeed02] = useState(false);
    const [showFeed03, setShowFeed03] = useState(false);
    const [showFeed04, setShowFeed04] = useState(false);
    const [showFeed05, setShowFeed05] = useState(false);
    const [showFeed06, setShowFeed06] = useState(false);


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

    const ProgressBar = (lesson, progresso) => {
        if (lesson == "1") {
            const [progress, setProgress] = useState(new Animated.Value(0));
            let percent = ((100) / feeds01[0].items.length);
            percent = Math.round(percent)
            percent.toString()
            percent = percent + "%"
            const progressAnim2 = progress.interpolate({
                inputRange: [0, feeds01[0].items.length - 1],
                outputRange: ['90%', '90%']
            })
            const progressAnim = progress.interpolate({
                inputRange: [0, feeds01[0].items.length - 1],
                outputRange: [percent, '100%']
            })
            return (
                renderProgressBar(progresso, progressAnim, progressAnim2) 
            )
        }

        if (lesson == "2") {
            const [progress, setProgress] = useState(new Animated.Value(0));
            let percent = ((100) / feeds02[1].items.length);
            percent = Math.round(percent)
            percent.toString()
            percent = percent + "%"
            const progressAnim2 = progress.interpolate({
                inputRange: [0, feeds02[1].items.length - 1],
                outputRange: ['90%', '90%']
            })
            const progressAnim = progress.interpolate({
                inputRange: [0, feeds02[1].items.length - 1],
                outputRange: [percent, '100%']
            })
            return (
                 renderProgressBar(progresso) 
            )
        }
    }

    const renderProgressBar = (progress, progressAnim, progressAnim2) => {
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

    const renderIconsFeeds = (icon, title) => {
        switch (icon) {
            case ("feed01.png"):
                if (showFeed01 == true) {
                    return (
                        <SafeAreaView style={{ alignItems: 'center' }}>
                            <ImagesFeeds
                                source={feed01On}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, showFeed01)}
                        </SafeAreaView>
                    )
                    break;
                } else {
                    return (
                        <SafeAreaView style={{ alignItems: 'center' }}>
                            <ImagesFeeds
                                source={feed01Off}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, showFeed01)}
                        </SafeAreaView>
                    )
                    break;
                }

            case ("feed02.png"):
                if (showFeed02 == true) {
                    return (
                        <SafeAreaView style={{ alignItems: 'center' }}>
                            <ImagesFeeds
                                source={feed02On}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, showFeed02)}
                        </SafeAreaView>
                    )
                    break;
                } else {
                    return (
                        <SafeAreaView style={{ alignItems: 'center' }}>
                            <ImagesFeeds
                                source={feed02Off}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, showFeed02)}
                        </SafeAreaView>
                    )
                    break;
                }
            case ("feed03.png"):
                if (showFeed03 == true) {
                    return (
                        <SafeAreaView style={{ alignItems: 'center' }}>
                            <ImagesFeeds
                                source={feed03On}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, showFeed03)}
                        </SafeAreaView>
                    )
                    break;
                } else {
                    return (
                        <SafeAreaView style={{ alignItems: 'center' }}>
                            <ImagesFeeds
                                source={feed03Off}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, showFeed03)}
                        </SafeAreaView>
                    )
                    break;
                }
            case ("feed04.png"):
                if (showFeed04 == true) {
                    return (
                        <SafeAreaView style={{ alignItems: 'center' }}>
                            <ImagesFeeds
                                source={feed04On}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, showFeed04)}
                        </SafeAreaView>
                    )
                    break;
                } else {
                    return (
                        <SafeAreaView style={{ alignItems: 'center' }}>
                            <ImagesFeeds
                                source={feed04Off}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, showFeed04)}
                        </SafeAreaView>
                    )
                    break;
                }
            case ("feed05.png"):
                if (showFeed05 == true) {
                    return (
                        <SafeAreaView style={{ alignItems: 'center' }}>
                            <ImagesFeeds
                                source={feed05On}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, showFeed05)}
                        </SafeAreaView>
                    )
                    break;
                } else {
                    return (
                        <SafeAreaView style={{ alignItems: 'center' }}>
                            <ImagesFeeds
                                source={feed05Off}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, showFeed05)}
                        </SafeAreaView>
                    )
                    break;
                }
            case ("feed06.png"):
                if (showFeed06 == true) {
                    return (
                        <SafeAreaView style={{ alignItems: 'center' }}>
                            <ImagesFeeds
                                source={feed06On}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, showFeed06)}
                        </SafeAreaView>
                    )
                    break;
                } else {
                    return (
                        <SafeAreaView style={{ alignItems: 'center' }}>
                            <ImagesFeeds
                                source={feed06Off}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, showFeed06)}
                        </SafeAreaView>
                    )
                    break;
                }
        }
    }

    const renderBoardFeeds = (title, show) => {
        return (
            <SafeAreaView style={styles.ShadowBoardFeeds}>
                <SafeAreaView style={styles.BoardFeeds}
                    bg={"#fff"}
                    bordercolor={'#D2D3D5'}
                    borderwidth={'2px'}>
                    <Text style={{
                        fontSize: 25,
                        fontFamily: 'GothamCondensed-Medium',
                        textAlign: 'center',
                        color: show == true
                            ? "black"
                            : "#727376"
                    }} >
                        {title}
                    </Text>
                </SafeAreaView>
            </SafeAreaView >
        )
    }

    const renderAllFeeds = () => {
        if (showFeed01 == true && showFeed04 == false) {
            return (
                <FlatList
                    data={feeds01}
                    keyExtractor={item => String(item._id)}
                    renderItem={({ item }) => <ListItem lesson={item.lesson} feeds={item.items}
                        progress={item.progress} show={item.show_lesson}></ListItem>}
                ></FlatList>
            )
        }

        if (showFeed01 == true && showFeed04 == true) {
            return (
                <FlatList
                    data={feeds02}
                    keyExtractor={item => String(item._id)}
                    renderItem={({ item }) => <ListItem lesson={item.lesson} feeds={item.items}
                        progress={item.progress} show={item.show_lesson}></ListItem>}
                ></FlatList>
            )
        }

    }

    const renderBlockTitle = () => {
        if (showFeed04 == false) {
            return (
                <SafeAreaView style={{ alignItems: 'center', marginTop: 30 }}>

                    <Animatable.View style={styles.LessonContainer}>
                        <IconLesson source={licao02Off}></IconLesson>
                    </Animatable.View>

                </SafeAreaView>
            )
        }
    }


    function ListItem({ lesson, feeds, progress, show }) {

        return (

            <Animatable.View style={styles.BgContainer}
                animation={currentOptionSelected == null
                    ? ""
                    : ""}>
                {renderLessonTitle(lesson, show)}
                {ProgressBar(lesson, progress)}
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
                                {renderIconsFeeds(item.icon, item.title)}
                                {renderModal(item.title, item.content)}
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                    )}
                </ImageBackground>
                {renderBlockTitle()}
            </Animatable.View>
        )

    }


    const Modal01 = (title, content) => {

        return (

            <Animatable.View
                animation={"bounceIn"}
                useNativeDriver
                style={{
                    marginTop: '2%',
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

    const Modal02 = () => {

        return (

            <Animatable.View
                animation={"bounceIn"}
                useNativeDriver
                style={{
                    marginTop: '2%',
                    width: '115%',
                    height: '25%',
                    backgroundColor: "#D2D3D5",
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    alignContent: 'center',
                    flexDirection: 'column',
                    borderRadius: 10,

                }}>
                <Text style={{
                    fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#727376", fontSize: 20,
                }}>PRATIQUE A ATIVIDADE {"\n"}PENDENTE!</Text>

                <SafeAreaView style={{

                    width: '90%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#A9ABAE',
                    borderRadius: 5,
                    marginBottom: 4,
                }}>
                    {/* <FastImage source={lock} style={{width: 20 , height: 10}}>
                    </FastImage>  */}
                    <Text style={{
                        fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#727376", fontSize: 25,
                        padding: 5
                    }}>BLOQUEADO</Text>

                </SafeAreaView>

            </Animatable.View>
        )
    }

    const Modal03 = () => {
        if (showOptionsModal2 == true) {

            return (

                <Animatable.View
                    animation={"bounceIn"}
                    useNativeDriver
                    style={{

                        width: 300,
                        height: 100,
                        backgroundColor: "#D2D3D5",
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        flexDirection: 'column',
                        borderRadius: 10,

                    }}>
                    <Text style={{
                        fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#727376", fontSize: 22,
                    }}>É PRECISO TERMINAR A LIÇÃO ANTERIOR!</Text>

                    <SafeAreaView style={{

                        width: '90%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#A9ABAE',
                        borderRadius: 5,
                        marginBottom: 4,
                    }}>
                        <Text style={{
                            fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#727376", fontSize: 25,
                            padding: 5
                        }}>BLOQUEADO</Text>

                    </SafeAreaView>

                </Animatable.View>
            )
        }
    }


    const renderModal = (title, content) => {
        if (currentOptionSelected == "Introdução" && title == "Introdução" && showOptionsModal == true) {
            if (showFeed01 == true) {
                return (
                    Modal01(title, content)
                )
            } else {
                return (
                    Modal02()
                )
            }

        }

        if (currentOptionSelected == "Sons Musicais" && title == "Sons Musicais" && showOptionsModal == true) {
            if (showFeed02 == true) {

                return (
                    Modal01(title, content)
                )
            } else {
                return (
                    Modal02()
                )
            }
        }

        if (showOptionsModal == true && currentOptionSelected == "Pauta e Clave" && title == "Pauta e Clave") {
            if (showFeed03 == true) {

                return (
                    Modal01(title, content)
                )
            } else {
                return (
                    Modal02()
                )
            }
        }

        if (showOptionsModal == true && currentOptionSelected == "Figuras de Notas" && title == "Figuras de Notas") {
            if (showFeed04 == true) {

                return (
                    Modal01(title, content)
                )
            } else {
                return (
                    Modal02()
                )
            }
        }

        if (showOptionsModal == true && currentOptionSelected == "Figuras de Pausas" && title == "Figuras de Pausas") {
            if (showFeed05 == true) {

                return (
                    Modal01(title, content)
                )
            } else {
                return (
                    Modal02()
                )
            }
        }

        if (showOptionsModal == true && currentOptionSelected == "Duração dos Valores" && title == "Duração dos Valores") {
            if (showFeed06 == true) {

                return (
                    Modal01(title, content)
                )
            } else {
                return (
                    Modal02()
                )
            }
        }
    }

    const selected = (title) => {
        setCurrentOptionSelected(title)

        if (contador % 2 == 0) {
            setShowOptionsModal(true)
        } else {
            setShowOptionsModal(false)
        }
        setContador(contador + 1)
    }

    const selected2 = () => {

        if (contador2 % 2 == 0) {
            setShowOptionsModal2(true)
        } else {
            setShowOptionsModal2(false)
        }
        setContador2(contador2 + 1)
    }



    {/* Main */ }
    return (
        <Bgcontainer>
            {/* Header*/}
            {renderHeader()}
            {/* Divisor */}
            {renderDivisor()}
            {/* Feeds */}
            {renderAllFeeds()}

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