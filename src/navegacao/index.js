//Import bibliotecas
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//Import rotas
import Intro from '../screens/atividades/Licao01/Intro';
import Sons from '../screens/atividades/Licao01/Sons';
import Pauta from '../screens/atividades/Licao01/Pauta';
import FigNotas from '../screens/atividades/Licao01/FigNotas';
import FigPausas from '../screens/atividades/Licao01/FigPausas';
import Valores from '../screens/atividades/Licao01/Valores';
import Main from '../routes/routes'


const Stack = createStackNavigator();

export default function index() {
    return(
    
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Main"
            screenOptions={{ headerShown: false }}>
                <Stack.Screen name = "Main" component={Main}></Stack.Screen>
                <Stack.Screen name= "Introdução" component={Intro}></Stack.Screen>
                <Stack.Screen name= "Sons Musicais" component={Sons}></Stack.Screen>
                <Stack.Screen name= "Pauta e Clave" component={Pauta}></Stack.Screen>
                <Stack.Screen name= "Figuras de Notas" component={FigNotas}></Stack.Screen>
                <Stack.Screen name= "Figuras de Pausas" component={FigPausas}></Stack.Screen>
                <Stack.Screen name= "Duração dos Valores" component={Valores}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>      
    )
}