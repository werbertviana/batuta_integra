// import bibliotecas
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';

import FastImage from 'react-native-fast-image'

//import paginas
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Elos from '../screens/Elos/Elos';

//import icones
import iconeHome from '../assets/imgs/iconeHome.png';
import iconeHome02 from '../assets/imgs/iconeHome02.png';
import iconeProfile from '../assets/imgs/iconePerfil.png';
import iconeProfile02 from '../assets/imgs/iconePerfil02.png';
import iconeElo from '../assets/imgs/iconeElo.png';
import iconeElo02 from '../assets/imgs/iconeElo02.png';



//import estilos
import {
    IconImages,
    Div2,
    DivisorLine2
} from '../components/style'

const Tab = createBottomTabNavigator();

export default function Routes(){
    const renderIcons = (icon, focused) =>{
        switch (icon) {
            case ("home"):
                if (focused == false){
                    return (
                        <FastImage style={styles.IconImages}source={iconeHome}></FastImage>
                    )
                }else{
                    return(
                        <FastImage style={styles.IconImages} source={iconeHome02}></FastImage>
                    )
                }
            break;
            case ("profile"):
                if (focused == false){
                    return (
                        <FastImage style={styles.IconImages} source={iconeProfile}></FastImage>
                    )
                }else{
                    return(
                        <FastImage style={styles.IconImages} source={iconeProfile02}></FastImage>
                    )
                }
            break;
            case ("elos"):
                if (focused == false){
                    return (
                        <FastImage style={styles.IconImages} source={iconeElo}></FastImage>
                    )
                }else{
                    return(
                        <FastImage style={styles.IconImages} source={iconeElo02}></FastImage>
                    )
                }
            break;
        }
    }
    const renderDivisor = () => {
        return (
            <Div2>
                <DivisorLine2></DivisorLine2>
            </Div2>
        )
    }

    return(

    //<SafeAreaView style={{backgroundColor: 'blue', marginTop:'150%'}}>

        <Tab.Navigator
            tabBarOptions={{
                style:{
                    borderTopColor: '#D2D3D5',
                    padding: 15,
                    //justifyContent:'space-around'
                    borderTopWidth: 2,
                    //width: '90%',
                    //backgroundColor: 'red',
                    //alignSelf: 'center'
                }
            }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarLabel:"",
                tabBarIcon: ({focused})=>(
                    renderIcons('home', focused)
                )
            }}
            />
            <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                tabBarLabel:"",
                tabBarIcon: ({focused})=>(
                    renderIcons('profile', focused)
                )
              }}
            />
            <Tab.Screen 
            name="Elos" 
            component={Elos}
            options={{
                tabBarLabel:"",
                tabBarIcon: ({focused})=>(
                    renderIcons('elos', focused)
                )
              }} 
            />
        </Tab.Navigator>
    //</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    IconImages:{
        width: 40,
        height: 40
    }
})