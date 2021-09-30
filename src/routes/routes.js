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
import iconeElo from '../assets/imgs/iconeElo.png';


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
                        <IconImages source={iconeHome}></IconImages>
                    )
                }else{
                    return(
                    <IconImages source={iconeHome02}></IconImages>
                    )
                }
            break;
            case ("profile"):
                return (
                    <IconImages source={iconeProfile}></IconImages>
                )
            break;
            case ("elos"):
                return (
                    <IconImages source={iconeElo}></IconImages>
                )
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
        
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    borderTopColor: 'transparent',
                    padding: 15,
                    //borderTopWidth: 2,
                    //width: '90%',
                    //backgroundColor: '#fff',
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
                    <IconImages
                      source={iconeProfile}>
                    </IconImages>
                )
              }}
            />
            <Tab.Screen 
            name="Elos" 
            component={Elos}
            options={{
                tabBarLabel:"",
                tabBarIcon: ()=>(
                    <IconImages
                      source={iconeElo}>
                    </IconImages>
                )
              }} 
            />
        </Tab.Navigator>
    )
}