//import bibliotecas
import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    Animated,
    StyleSheet,
    ImageBackground,
    TouchableWithoutFeedback,
    Text,
    FlatList,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';

// import estilos
import {
    Bgcontainer,
    DivisorLine2,
    ImagesFeeds,
    IconLesson,
    IconImages,
    Div
} from '../../components/style'

import { connect } from 'react-redux';

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
//import api
import api from '../../services/Api';



function Home({ navigation }, props) {

    // console.log(props.numeros)

    const [allFeeds, setallFeeds] = useState();
    const [allItems, setallItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [lifePoints, setlifePoints] = useState();
    const [users, setUsers] = useState();
    const [showOptionsModal, setShowOptionsModal] = useState(false);
    const [contador, setContador] = useState(0);
    let [xpPoints, setxpPoints] = useState(0);
    let [batutaPoints, setBatutaPoints] = useState(0);
    let show_feed = [];
    let life;
    let xp;
    let batutas;

    

    function getFeeds() {
        api.get("/allfeeds").then((response) => {
            setallFeeds(response.data)
        });
    }

    function getItems() {
        api.get("/items").then((response) => {
            setallItems(response.data)
        });
    }

    function getUsers() {
        api.get("/users").then((response) => {
            setUsers(response.data)
        });
    }

    useEffect(() => {
        getFeeds();
        getItems();
        getUsers();
        setLoading(false);
    }, []);


    if (users) {
        users.map((item) => {
            life = item.vida
            xp = item.xp
            batutas = item.batutas
        }
        );
    }

    //loading
    if (loading || !allFeeds) {
        return (
            <SafeAreaView style={styles.containerLoading}>
                <ActivityIndicator
                    size="large"
                    color="black">
                </ActivityIndicator>
                <Text>CARREGANDO...</Text>
            </SafeAreaView>
        )
    }



    //Criando variáveis de controle para exibição de feeds
    const feeds01 = [];
    const feeds02 = [];

    feeds01.push(allFeeds[0]);
    feeds02.push(allFeeds[0]);
    feeds02.push(allFeeds[1]);

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
                {life}
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
                    {xp}
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
                    {batutas}
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
            case (1):
                if (show == true) {
                    return (
                        <Animatable.View style={styles.LessonContainer}>
                            <IconLesson source={licao01}></IconLesson>

                        </Animatable.View>
                    )
                    break;
                }
            case (2):
                if (show == true) {
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
        if (lesson == 1) {
            const [progress, setProgress] = useState(new Animated.Value(0));
            let percent = ((100) / feeds01[0].items.length);
            percent = Math.round(percent)

            if (show_feed[0] == true && show_feed[1] == false) {
                let percent2 = percent
                percent2.toString()
                percent2 = percent2 + "%"
                const progressAnim2 = progress.interpolate({
                    inputRange: [0, feeds01[0].items.length - 1],
                    outputRange: ['90%', '90%']
                })
                const progressAnim = progress.interpolate({
                    inputRange: [0, feeds01[0].items.length - 1],
                    outputRange: [percent2, '100%']
                })
                return (
                    renderProgressBar(progresso, progressAnim, progressAnim2)
                )
            }

            if (show_feed[0] == true && show_feed[1] == true && show_feed[2] == false) {
                percent = percent + percent;
                let percent2 = percent
                percent2.toString()
                percent2 = percent2 + "%"
                const progressAnim2 = progress.interpolate({
                    inputRange: [0, feeds01[0].items.length - 1],
                    outputRange: ['90%', '90%']
                })
                const progressAnim = progress.interpolate({
                    inputRange: [0, feeds01[0].items.length - 1],
                    outputRange: [percent2, '100%']
                })
                return (
                    renderProgressBar(progresso, progressAnim, progressAnim2)
                )
            }

            if (show_feed[0] == true && show_feed[1] == true && show_feed[2] == true) {
                const progressAnim2 = progress.interpolate({
                    inputRange: [0, feeds01[0].items.length - 1],
                    outputRange: ['90%', '90%']
                })
                const progressAnim = progress.interpolate({
                    inputRange: [0, feeds01[0].items.length - 1],
                    outputRange: ['100%', '100%']
                })
                return (
                    renderProgressBar(progresso, progressAnim, progressAnim2)
                )
            }
        }
        if (lesson == 2) {
            const [progress, setProgress] = useState(new Animated.Value(0));
            let percent = ((100) / feeds01[0].items.length);
            percent = Math.round(percent)

            if (show_feed[3] == true && show_feed[4] == false) {
                let percent2 = percent
                percent2.toString()
                percent2 = percent2 + "%"
                const progressAnim2 = progress.interpolate({
                    inputRange: [0, feeds01[0].items.length - 1],
                    outputRange: ['90%', '90%']
                })
                const progressAnim = progress.interpolate({
                    inputRange: [0, feeds01[0].items.length - 1],
                    outputRange: [percent2, '100%']
                })
                return (
                    renderProgressBar(progresso, progressAnim, progressAnim2)
                )
            }

            if (show_feed[3] == true && show_feed[4] == true && show_feed[5] == false) {
                percent = percent + percent;
                let percent2 = percent
                percent2.toString()
                percent2 = percent2 + "%"
                const progressAnim2 = progress.interpolate({
                    inputRange: [0, feeds01[0].items.length - 1],
                    outputRange: ['90%', '90%']
                })
                const progressAnim = progress.interpolate({
                    inputRange: [0, feeds01[0].items.length - 1],
                    outputRange: [percent2, '100%']
                })
                return (
                    renderProgressBar(progresso, progressAnim, progressAnim2)
                )
            }

            if (show_feed[3] == true && show_feed[4] == true && show_feed[5] == true) {
                const progressAnim2 = progress.interpolate({
                    inputRange: [0, feeds01[0].items.length - 1],
                    outputRange: ['90%', '90%']
                })
                const progressAnim = progress.interpolate({
                    inputRange: [0, feeds01[0].items.length - 1],
                    outputRange: ['100%', '100%']
                })
                return (
                    renderProgressBar(progresso, progressAnim, progressAnim2)
                )
            }
        }
    }

    const renderProgressBar = (progress, progressAnim, progressAnim2) => {
        if (progress == true) {
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

    const renderIconsFeeds2 = (icon, title) => {
        return (
            <Text>{title}</Text>
        )
    }


    const renderIconsFeeds = (icon, title) => {
        switch (icon) {
            case ("feed01.png"):
                if (show_feed[0] == true) {
                    return (
                        <SafeAreaView style={{ alignItems: 'center', margin: '2%', position: 'relative', zIndex: 1 }}>
                            <ImagesFeeds
                                source={feed01On}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, show_feed[0])}
                            {renderModal(title, icon)}
                        </SafeAreaView>
                    )
                    break;
                } else {
                    return (
                        <SafeAreaView style={{ alignItems: 'center', margin: '2%' }}>
                            <ImagesFeeds
                                source={feed01Off}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, show_feed[0])}
                            {renderModal(title, icon)}
                        </SafeAreaView>
                    )
                    break;
                }

            case ("feed02.png"):
                if (show_feed[1] == true) {
                    return (
                        <SafeAreaView style={{ alignItems: 'center', margin: '2%', position: 'relative', zIndex: 1 }}>
                            <ImagesFeeds
                                source={feed02On}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, show_feed[1])}
                            {renderModal(title, icon)}
                        </SafeAreaView>
                    )
                    break;
                } else {
                    return (
                        <SafeAreaView style={{ alignItems: 'center', margin: '2%' }}>
                            <ImagesFeeds
                                source={feed02Off}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, show_feed[1])}
                            {renderModal(title, icon)}
                        </SafeAreaView>
                    )
                    break;
                }
            case ("feed03.png"):
                if (show_feed[2] == true) {
                    return (
                        <SafeAreaView style={{ alignItems: 'center', margin: '2%' }}>
                            <ImagesFeeds
                                source={feed03On}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, show_feed[2])}
                            {renderModal(title, icon)}
                        </SafeAreaView>
                    )
                    break;
                } else {
                    return (
                        <SafeAreaView style={{ alignItems: 'center', margin: '2%' }}>
                            <ImagesFeeds
                                source={feed03Off}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, show_feed[2])}
                            {renderModal(title, icon)}
                        </SafeAreaView>
                    )
                    break;
                }
            case ("feed04.png"):
                if (show_feed[3] == true) {
                    return (
                        <SafeAreaView style={{ alignItems: 'center', margin: '2%' }}>
                            <ImagesFeeds
                                source={feed04On}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, show_feed[3])}
                            {renderModal(title, icon)}
                        </SafeAreaView>
                    )
                    break;
                } else {
                    return (
                        <SafeAreaView style={{ alignItems: 'center', margin: '2%' }}>
                            <ImagesFeeds
                                source={feed04Off}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, show_feed[3])}
                            {renderModal(title, icon)}
                        </SafeAreaView>
                    )
                    break;
                }
            case ("feed05.png"):
                if (show_feed[4] == true) {
                    return (
                        <SafeAreaView style={{ alignItems: 'center', margin: '2%' }}>
                            <ImagesFeeds
                                source={feed05On}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, show_feed[4])}
                            {renderModal(title, icon)}
                        </SafeAreaView>
                    )
                    break;
                } else {
                    return (
                        <SafeAreaView style={{ alignItems: 'center', margin: '2%' }}>
                            <ImagesFeeds
                                source={feed05Off}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, show_feed[4])}
                            {renderModal(title, icon)}
                        </SafeAreaView>
                    )
                    break;
                }
            case ("feed06.png"):
                if (show_feed[5] == true) {
                    return (
                        <SafeAreaView style={{ alignItems: 'center', margin: '2%' }}>
                            <ImagesFeeds
                                source={feed06On}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, show_feed[5])}
                            {renderModal(title, icon)}
                        </SafeAreaView>
                    )
                    break;
                } else {
                    return (
                        <SafeAreaView style={{ alignItems: 'center', margin: '2%' }}>
                            <ImagesFeeds
                                source={feed06Off}>
                            </ImagesFeeds>
                            {renderBoardFeeds(title, show_feed[5])}
                            {renderModal(title, icon)}
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
        renderShowFeeds()
        if (show_feed[0] == true && show_feed[3] == false) {
            return (
                <FlatList
                    data={feeds01}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <ListItem lesson={item.lesson} feeds={item.items}
                        progress={item.progress} show={item.show_lesson}></ListItem>}
                ></FlatList>
            )
        }

        if (show_feed[0] == true && show_feed[3] == true) {
            return (
                <FlatList
                    data={feeds02}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <ListItem lesson={item.lesson} feeds={item.items}
                        progress={item.progress} show={item.show_lesson}></ListItem>}
                ></FlatList>
            )
        }
    }


    const renderShowFeeds = () => {
        allItems.map((item) => {
            show_feed.push(item.show_feed)
        }
        )
    }



    const renderBlockTitle = () => {
        if (show_feed[3] == false) {
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
            <SafeAreaView style={styles.BgContainer}>

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
                            {renderIconsFeeds(item.icon, item.title)}
                        </TouchableWithoutFeedback>
                    )}
                </ImageBackground>
                {renderBlockTitle()}
            </SafeAreaView>
        )
    }

    const Modal01 = (title, icon) => {
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
                    onPress={() => navigation.navigate(icon)}
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

    const renderModal = (title, icon) => {
        if (currentOptionSelected == "Introdução" && title == "Introdução" && showOptionsModal == true) {
            if (show_feed[0] == true) {
                return (
                    Modal01(title, icon)
                )
            } else {
                return (
                    Modal02()
                )
            }

        }

        if (currentOptionSelected == "Sons Musicais" && title == "Sons Musicais" && showOptionsModal == true) {
            if (show_feed[1] == true) {

                return (
                    Modal01(title, icon)
                )
            } else {
                return (
                    Modal02()
                )
            }
        }

        if (showOptionsModal == true && currentOptionSelected == "Pauta e Clave" && title == "Pauta e Clave") {
            if (show_feed[2] == true) {

                return (
                    Modal01(title, icon)
                )
            } else {
                return (
                    Modal02()
                )
            }
        }

        if (showOptionsModal == true && currentOptionSelected == "Figuras de Notas" && title == "Figuras de Notas") {
            if (show_feed[3] == true) {

                return (
                    Modal01(title, icon)
                )
            } else {
                return (
                    Modal02()
                )
            }
        }

        if (showOptionsModal == true && currentOptionSelected == "Figuras de Pausas" && title == "Figuras de Pausas") {
            if (show_feed[4] == true) {

                return (
                    Modal01(title, icon)
                )
            } else {
                return (
                    Modal02()
                )
            }
        }

        if (showOptionsModal == true && currentOptionSelected == "Duração dos Valores" && title == "Duração dos Valores") {
            if (show_feed[5] == true) {

                return (
                    Modal01(title, icon)
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

function mapStateToProps(state){
    return {
       numeros: state.numeros
    }
}

// export default connect(mapStateToProps)(Home)
export default Home

const styles = StyleSheet.create({
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
        //width: '100%',
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