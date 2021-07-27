import React from 'react';
import { Alert } from 'react-native';
import {ButtomContainer, JumpButton, JumpText, ConfirmButton, ConfirmText} from './style'
export default function Buttom() {

    return (

        <ButtomContainer>
            <JumpButton onPress={() => Alert.alert('Funcional')}>
                <JumpText> PULAR </JumpText>
            </JumpButton>
            <ConfirmButton onPress={() => Alert.alert('Funcional')}>
                <ConfirmText> CONFIRMAR </ConfirmText>
            </ConfirmButton>
        </ButtomContainer> 
    )
}
