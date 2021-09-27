//import bibliotecas
import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    Animated,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableWithoutFeedback,
    Text, 
    FlatList
} from 'react-native';
import * as Animatable from 'react-native-animatable';

// import estilos
import {
    Bgcontainer,
    IconImages,
    Div,
    DivisorLine2,
    IconLesson,
    Div2
} from '../components/style'

// import ícones
import iconeLife from '../assets/imgs/iconeLife.png';
import iconeXp from '../assets/imgs/iconeXp.png';
import iconeBatutas from '../assets/imgs/iconeBatutas.png';
import iconeBatuta from '../assets/imgs/iconeBatuta.png';
import licao01 from '../assets/imgs/licao01.png';
import licao02 from '../assets/imgs/licao02.png';
import iconeHome from '../assets/imgs/iconeHome.png';
import iconePerfil from '../assets/imgs/iconePerfil.png';
import iconeElo from '../assets/imgs/iconeElo.png';
import iconeStar from '../assets/imgs/iconeStar.png';
import bgViolao from '../assets/imgs/bgViolao.png';
import feed01 from '../assets/imgs/feed01.png';
import feed02 from '../assets/imgs/feed02.png';
import feed03 from '../assets/imgs/feed03.png';
// import dados estáticos
import staticFeeds from '../data/Feeds.json'


export default function App() {
    
    const allFeeds = staticFeeds.feeds;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const ButtonRef = useRef()
    const Button2Ref = useRef()
    const Button3Ref = useRef()
    const [lifePoints, setlifePoints] = useState(5);
    const [xpPoints, setxpPoints] = useState(40);
    const [batutaPoints, setbatutaPoints] = useState(10);

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
            <SafeAreaView style={{padding:2}}>
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
            <SafeAreaView style={{padding:2}}>
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
            <Div>
                <DivisorLine2></DivisorLine2>
            </Div>
        )
    }

    const renderDivisor2 = () => {
        return (
            <Div2>
                <DivisorLine2></DivisorLine2>
            </Div2>
        )
    }

    const renderHome = () => {
        return (
            <TouchableWithoutFeedback
            onPress={() => testeLife()}
            >
                <Animatable.View style={styles.HomeContainer}>
                    <IconImages
                        source={iconeHome}>
                    </IconImages>
                </Animatable.View>
            </TouchableWithoutFeedback>
        )
    }

    const renderPerfil = () => {
        return (
            <TouchableWithoutFeedback
            onPress={() => testeLife()}
            >
                <Animatable.View style={styles.PerfilContainer}>
                    <IconImages
                        source={iconePerfil}>
                    </IconImages>
                </Animatable.View>
            </TouchableWithoutFeedback>
        )
    }

    const renderElo = () => {
        return (
            <TouchableWithoutFeedback
            onPress={() => testeLife()}
            >
                <Animatable.View style={styles.EloContainer}>
                    <IconImages
                        source={iconeElo}>
                    </IconImages>
                </Animatable.View>
            </TouchableWithoutFeedback>
        )
    }

    const renderFooter = () => {
        return (
            <SafeAreaView style={styles.FooterContainer}>
                {renderHome()}
                {renderPerfil()}
                {renderElo()}
            </SafeAreaView>
        )
    }

// Numero da licao
    const renderLessonTitle = () => {
        switch (allFeeds[currentQuestionIndex].lesson) {
            case ("1"):
                return (
                    <Animatable.View style={styles.LessonContainer}>
                    <IconLesson source={licao01}></IconLesson>
                    </Animatable.View>
                )
                break;
            case ("2"):
                return (
                    <IconLesson source={licao02}></IconLesson>
                )
                break;   
        }
    }

    const renderStar = () => {
        return (
            <SafeAreaView style={{padding:5}}>
            <Image style={{height:35, width:35}}
                source={iconeStar}>
            </Image>
            </SafeAreaView>
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
    const renderProgressBar = () => {
        return (
            <Animatable.View style={styles.ProgressContainer}> 
                 {renderStar()}   
                <SafeAreaView style={{
                    width: '68%',
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

    const renderIconsFeeds = (icons) =>{
            switch (icons) {
                case ("feed01.png"):
                    return (
                        <Image style={{height: 132, width: 132, marginTop: '8%'}}
                        source={feed01}>
                        </Image>
                    )
                break;
                case ("feed02.png"):
                    return (
                        <Image style={{height: 130, width: 130}}
                        source={feed02}>
                        </Image>
                    )
                break;
                case ("feed03.png"):
                    return (
                        <Image style={{height: 130, width: 130}}
                        source={feed03}>
                        </Image>
                    )
                break;
            }        
    }

    const testeLife = () =>{
        setlifePoints(3);
    }

    const renderFeeds = () => {
        return (
            <Animatable.View style={styles.BgContainer}> 
             <ImageBackground style={styles.ViolaoBackground}
                    source={bgViolao}>  
                {allFeeds[currentQuestionIndex].items.map((item) =>
                    <TouchableWithoutFeedback
                        onPress={() => testeLife()}
                        key={item.id}     
                    >
                        <Animatable.View
                        animation="pulse"
                        useNativeDriver
                        ref={ButtonRef}
                        style={{margin: '1%', marginHorizontal: '6.6%', alignItems: 'center'}}
                        >
                            {renderIconsFeeds(item.icon)}
                            {renderBoardFeeds(item.title)}
                        </Animatable.View>
                    </TouchableWithoutFeedback>
                )
                }
                </ImageBackground>
            </Animatable.View>
        )
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

    const renderFeeds02 = () =>{
        return(
        <Animatable.View style={styles.BgContainer}> 
            <ImageBackground 
            style={styles.ViolaoBackground}
            source={bgViolao}>  
               <FlatList
                data={allFeeds}
                keyExtractor={ item => String(item._id)}
                renderItem={({item}) => <ListItem></ListItem>}
                horizontal={false}
                ></FlatList>
            </ImageBackground>
        </Animatable.View>
        )
    }
    

function ListItem(){
    return(
        allFeeds[currentQuestionIndex].items.map((item) =>
            <TouchableWithoutFeedback 
            onPress={() => testeLife()}>
                <Animatable.View
                animation="pulse"
                useNativeDriver
                ref={ButtonRef}
                style={{margin: '1%', marginHorizontal: '6.6%', alignItems: 'center'}}
                >
                    {renderIconsFeeds(item.icon)}
                    {renderBoardFeeds(item.title)}               
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
        {/* Divisor */}
        {renderDivisor()}
        {/* Lição */}
        {renderLessonTitle()}
        {/* Progress Bar */}
        {renderProgressBar()}
        {/* Background Feeds */}
        {renderFeeds02()}
        {/* Divisor */}
        {renderDivisor2()}
        {/* Footer */}
        {renderFooter()}
        </Bgcontainer>
    );
}

const styles = StyleSheet.create({
    HeaderContainer: {
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'red'
    },
    FooterContainer: {
        marginTop: '4%',
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'red'
    },
    ProgressContainer: {
        marginTop: '2%',
        height: '4%',
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        //backgroundColor: 'yellow',
    },
    BgContainer: {
        width: '95%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        //backgroundColor: 'red',
        padding: 8
    },
    ViolaoBackground: {
        resizeMode: 'contain',
        height:411, 
        width:355, 
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignContent: 'center'
        //backgroundColor: 'red'
    },
    LessonContainer: {
        marginTop: '2%',
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
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
        color: '#FC4848',
    },
    XpContainer: {
        width: '14%',
        height: '100%',
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
        width: '14%',
        height: '100%',
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
        width: '14%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    PerfilContainer: {
        width: '14%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    EloContainer: {
        width: '14%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    ShadowBoardFeeds: {
        marginTop: '6%',
        width: '110%',
        height: '10%',
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
    TextFeeds:{
        fontSize: 28,
        fontFamily: 'GothamCondensed-Medium',
        textAlign: 'center'
    }
});