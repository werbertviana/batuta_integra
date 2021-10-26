//Import bibliotecas
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//Import rotas atividades
import Intro from '../screens/Atividades/Licao01/Intro';
import Sons from '../screens/Atividades/Licao01/Sons';
import Pauta from '../screens/Atividades/Licao01/Pauta';
import FigNotas from '../screens/Atividades/Licao02/FigNotas';
import FigPausas from '../screens/Atividades/Licao02/FigPausas';
import Valores from '../screens/Atividades/Licao02/Valores';
import Main from '../routes/routes'

//import rotas conteudo
import contIntro from '../screens/Conteudo/Licao01/Intro';
import contSons from '../screens/Conteudo/Licao01/Sons';
import contPauta from '../screens/Conteudo/Licao01/Pauta';
import contFigNotas from '../screens/Conteudo/Licao02/FigNotas';
import contFigPausas from '../screens/Conteudo/Licao02/FigPausas';
import contValores from '../screens/Conteudo/Licao02/Valores';


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
                <Stack.Screen name= "1" component={contIntro}></Stack.Screen>
                <Stack.Screen name= "2" component={contSons}></Stack.Screen>
                <Stack.Screen name= "3" component={contPauta}></Stack.Screen>
                <Stack.Screen name= "4" component={contFigNotas}></Stack.Screen>
                <Stack.Screen name= "5" component={contFigPausas}></Stack.Screen>
                <Stack.Screen name= "6" component={contValores}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>      
    )
}