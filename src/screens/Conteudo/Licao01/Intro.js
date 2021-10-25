//import bibliotecas
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';

//import images
import Introducao from '../../../assets/imgs/introducao.png';
import slides01 from '../../../assets/imgs/Conteudo/Licao01/slides01.png';
import slides02 from '../../../assets/imgs/Conteudo/Licao01/slides02.png';
import slides03 from '../../../assets/imgs/Conteudo/Licao01/slides03.png';
import slides04 from '../../../assets/imgs/Conteudo/Licao01/slides04.png';
import slides05 from '../../../assets/imgs/Conteudo/Licao01/slides05.png';

//import slides estaticos
import staticSlides from '../../../data/Conteudo/Licao01/Intro.json'

//import estilos
import {
    DivisorLine2,
    Bgcontainer
} from '../../../components/style'

export default function App() {

    const allSlides = staticSlides.slides;

    const renderHeader = () => {
        return (
            <SafeAreaView style={styles.HeaderContainer}>
                <FastImage source={Introducao} style={{ width: 200, height: 70 }}></FastImage>
            </SafeAreaView>
        )
    }

    function renderSlides({ item }) {
        switch (item.image) {
            case ("slides01.png"):
                return (
                    <SafeAreaView>
                        <FastImage source={slides01} style={{ width: 50, height: 50 }}>
                        </FastImage>
                    </SafeAreaView>
                )
                break;
            case ("slides02.png"):
                return (
                    <SafeAreaView>
                        <FastImage source={slides02} style={{ width: 50, height: 50 }}>
                        </FastImage>
                    </SafeAreaView>
                )
                break;
            case ("slides03.png"):
                return (
                    <SafeAreaView>
                        <FastImage source={slides03} style={{ width: 50, height: 50 }}>
                        </FastImage>
                    </SafeAreaView>
                )
                break;
            case ("slides04.png"):
                return (
                    <SafeAreaView>
                        <FastImage source={slides04} style={{ width: 50, height: 50 }}>
                        </FastImage>
                    </SafeAreaView>
                )
                break;
            case ("slides05.png"):
                return (
                    <SafeAreaView>
                        <FastImage source={slides05} style={{ width: 50, height: 50 }}>
                        </FastImage>
                    </SafeAreaView>
                )
                break;
        }
    }
    
    return (
        <Bgcontainer>
            {/* Header*/}
            
            <Text>Teste</Text>
            {/* Slides */}
            {/* <DivisorLine2></DivisorLine2>
            <AppIntroSlider
                renderItem={renderSlides}
                data={allSlides}
                activeDotStyle={{
                    backgroundColor: '#96989A'
                }}
            >
            </AppIntroSlider> */}
        </Bgcontainer>
    )

}

const styles = StyleSheet.create({
    HeaderContainer: {
        marginTop: '1%',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red'
    }
})