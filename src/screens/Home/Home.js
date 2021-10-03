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
import Modal from 'react-native-modal'
import FastImage from 'react-native-fast-image'

// import estilos
import {
    Bgcontainer,
    DivisorLine2,
    Div2
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

export default function App() {
    
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

    const renderLife = () => {
        return (
            <Animatable.View style={styles.LifeContainer}>
                <FastImage
                    style={styles.IconImages}
                    source={iconeLife}>
                </FastImage>
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
                 <FastImage
                    style={styles.IconImages}
                    source={iconeXp}>
                </FastImage>
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
                <FastImage
                    style={styles.IconImages}
                    source={iconeBatutas}>
                </FastImage>
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
                 <FastImage
                    style={styles.IconImages}
                    source={iconeBatuta}>
                </FastImage>
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
            <Div2>
                <DivisorLine2></DivisorLine2>
            </Div2>
        )
    }

// Numero da licao
    const renderLessonTitle = (lesson) => {
        switch (lesson) {
            case ("1"):
                return (
                    <Animatable.View style={styles.LessonContainer}>
                    <FastImage style={styles.IconLesson} source={licao01}></FastImage>
                    </Animatable.View>
                )
                break;
            case ("2"):
                return (
                    <Animatable.View style={styles.LessonContainer}>
                    <FastImage style={styles.IconLesson} source={licao02}></FastImage>
                    </Animatable.View>
                )
                break;   
        }
    }

    const renderStar = () => {
        return (
            <FastImage style={{height:35, width:35, marginRight: '5%'}}
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
        if(progress==1){
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

    const renderIconsFeeds = (icons) =>{
            switch (icons) {
                case ("feed01.png"):
                    return (
                        <FastImage
                        style={styles.ImagesFeeds}
                        source={feed01}>
                        </FastImage>
                    )
                break;
                case ("feed02.png"):
                    return (
                        <FastImage
                        style={styles.ImagesFeeds}
                        source={feed02}>
                        </FastImage>
                    )
                break;
                case ("feed03.png"):
                    return (
                        <FastImage
                        style={styles.ImagesFeeds}
                        source={feed03}>
                        </FastImage>
                    )
                break;
                case ("feed04.png"):
                    return (
                        <FastImage
                        style={styles.ImagesFeeds}
                        source={feed04}>
                        </FastImage>
                    )
                break;
                case ("feed05.png"):
                    return (
                        <FastImage
                        style={styles.ImagesFeeds}
                        source={feed05}>
                        </FastImage>
                    )
                break;
                case ("feed06.png"):
                    return (
                        <FastImage
                        style={styles.ImagesFeeds}
                        source={feed06}>
                        </FastImage>
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

    const renderFeeds = () =>{
        return(
               <FlatList
                data={allFeeds}
                keyExtractor={ item => String(item._id)}
                renderItem={({item}) =><ListItem lesson = {item.lesson} feeds = {item.items} progress = {item.progress}></ListItem>}
                ></FlatList>
        )
    }

    function ListItem ({lesson, feeds, progress}){
        return(  
            <Animatable.View style={styles.BgContainer}>
                {renderLessonTitle(lesson)} 
                {renderProgressBar(progress)}
                <ImageBackground 
                style={styles.ViolaoBackground}
                source={bgViolao}>   
                        {feeds.map((item) => 
                        <TouchableWithoutFeedback
                            onPress={() => setShowOptionsModal(true)}
                            key={item.id}
                        >
                            <Animatable.View
                            animation=""
                            useNativeDriver
                            ref={ButtonRef}
                            style={{alignItems: 'center',
                            margin:'1%', marginTop:'4%', //backgroundColor:'yellow'
                        }}
                            >
                                {renderIconsFeeds(item.icon)}
                                {renderBoardFeeds(item.title)}
                                {renderModal()}
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        )} 
                </ImageBackground>         
            </Animatable.View>
        )
    }

    const exitModal = () => {
        setShowOptionsModal(false)
    }

    const renderModal = () => {
        
        return (
       
            
            <Modal
            isVisible={showOptionsModal}
            onBackdropPress={()=>{setShowOptionsModal(false)}}
            backdropColor={'transparent'}
            alignItems={'center'}
            >
                    <SafeAreaView style={{
                        width: '50%',
                        height: '16%',
                        backgroundColor: "#236A79",
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        flexDirection: 'column',
                        borderRadius: 10
                    }}>
                        <TouchableWithoutFeedback
                        onPress={() => setShowOptionsModal(false)}>
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
                        onPress={() => setShowOptionsModal(false)}>
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
                                }}>PRATICAR + <Text style={{color: "#FDC500"}}>10XP</Text></Text>   
                            </SafeAreaView>
                        </TouchableWithoutFeedback>

                    </SafeAreaView>
            </Modal>    
        )
    }

    const renderModal02 = () => {
        
        return (
           // <SafeAreaView>
                <Modal
                isVisible={showOptionsModal}
                onBackdropPress={()=>{setShowOptionsModal(false)}}
                backdropColor={'transparent'}
                alignItems={'center'}
                
                >
                    <Text>Teste</Text>           
                </Modal>
            //</SafeAreaView>     
        )                     
    }

    const renderModal03 = () => {
        
        return (
           <SafeAreaView 
           style={{backgroundColor: 'yellow'}}
           >
                    <Image ></Image>
                    <Text>Teste</Text>           
                
            </SafeAreaView>     
        )                     
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
        marginTop: '2%',
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
        margin: '4%',
        width: '92%',
        alignItems: 'center',
        //backgroundColor: 'red',
    },
    ViolaoBackground: { 
        resizeMode: 'contain',
        height:411, 
        width:360, 
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
        width:162,
        height:45,
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
        fontSize: 25,
        fontFamily: 'GothamCondensed-Medium',
        textAlign: 'center'
    },
    ImagesFeeds:{
        width: 125,
        height: 125
    },
    IconLesson:{
        width: 260,
        height: 100
    },
    IconImages:{
        width: 40,
        height: 40
    }
});