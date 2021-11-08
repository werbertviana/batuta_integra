//import bibliotecas
import React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

//import imagens
import foto01 from '../../assets/imgs/Elos/bronze.png';
import foto02 from '../../assets/imgs/Elos/02.png';
import foto03 from '../../assets/imgs/Elos/03.png';

export default function Elos(){
    return (
        <SafeAreaView style={styles.container}>
            <FastImage source={foto01} style={{height:'40%', width:'100%'}}></FastImage>
            <FastImage source={foto02} style={{height:'25%', width:'100%'}}></FastImage>
            <FastImage source={foto03} style={{height:'24%', width:'87%'}}></FastImage>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});