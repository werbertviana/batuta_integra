// import bibliotecas
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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
    IconImages
} from '../components/style'

const Tab = createBottomTabNavigator();


export default function Routes(){
    const renderIcons = (icon, focused) =>{
        switch (icon) {
            case ("home"):
                if (focused == false){
                    return (
                        <IconImages source={iconeHome}></IconImages>
                    )
                }else{
                    return(
                        <IconImages source={iconeHome02}></IconImages>
                    )
                }
            break;
            case ("profile"):
                if (focused == false){
                    return (
                        <IconImages source={iconeProfile}></IconImages>
                    )
                }else{
                    return(
                        <IconImages source={iconeProfile02}></IconImages>
                    )
                }
            break;
            case ("elos"):
                if (focused == false){
                    return (
                        <IconImages source={iconeElo}></IconImages>
                    )
                }else{
                    return(
                        <IconImages source={iconeElo02}></IconImages>
                    )
                }
            break;
        }
    }

    return(

        <Tab.Navigator
            tabBarOptions={{
                style:{
                    borderTopColor: '#D2D3D5',
                    padding: 15,
                    //justifyContent:'space-around'
                    borderTopWidth: 2.5,
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
      
    )
}

