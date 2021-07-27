import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
//import AtivClave from '../screens/atividades/AtivClave'
import Atividades from '../screens/atividades/Atividades'
import Menu from '../screens/Menu'
import PassoStack from '../components/PassoStack'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Menu"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu">
            {props => (
                <PassoStack {...props} iniciar="Atividades">
                    <Menu></Menu>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="Atividades"
            component={Atividades}>

        </Stack.Screen>
    </Stack.Navigator>
)