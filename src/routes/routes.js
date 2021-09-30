import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Image
} from 'react-native';

//import paginas
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Elos from '../screens/Elos/Elos';

//import icones
import iconeHome from '../assets/imgs/iconeHome.png';
import iconeProfile from '../assets/imgs/iconePerfil.png';
import iconeElo from '../assets/imgs/iconeElo.png';

//import estilos
import {
    IconImages
} from '../components/style'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    borderTopColor: 'transparent'
                },
                tabStyle:{
                    paddingBottom: 1,
                    paddingTop: 8
                }
            }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              tabBarIcon: ()=>(
                  <IconImages
                    source={iconeHome}
                  ></IconImages>
              )
            }}
            />
            <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                tabBarIcon: ()=>(
                    <IconImages
                      source={iconeProfile}
                    ></IconImages>
                )
              }}
            />
            <Tab.Screen 
            name="Elos" 
            component={Elos}
            options={{
                tabBarIcon: ()=>(
                    <IconImages
                      source={iconeElo}
                    ></IconImages>
                )
              }} 
            />
        </Tab.Navigator>
    )
}