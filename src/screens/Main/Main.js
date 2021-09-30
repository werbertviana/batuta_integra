import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '../../routes/routes';

export default function Main(){
    return(
        <NavigationContainer>
            <Routes/>
        </NavigationContainer>
    )
}