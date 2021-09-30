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
import iconePerfil from '../assets/imgs/iconePerfil.png';
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
                    paddingBottom: 5,
                    paddingTop: 5
                }
            }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              tabBarIcon: ()=>(
                  <Image></Image>
              )
            }}
            />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Elos" component={Elos} />
        </Tab.Navigator>
    )
}