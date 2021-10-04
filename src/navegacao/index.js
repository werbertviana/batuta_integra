import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ModalOptions from '../screens/Modal/ModalOptions'
import Atividades from '../screens/atividades/Atividades';
import Main from '../routes/routes'


const Stack = createStackNavigator();

export default function index() {
    return(
    
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Main"
            screenOptions={{ headerShown: false }}>
                <Stack.Screen name = "Main" component={Main}></Stack.Screen>
                <Stack.Screen name="Options" component={ModalOptions}></Stack.Screen>
                <Stack.Screen name="Atividades" component={Atividades}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>      
    )
}