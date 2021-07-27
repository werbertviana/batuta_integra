import React from 'react';
import { Image } from 'react-native';
import iconeFacil from '../assets/imgs/iconeFacil.png';
import {Div, DivisorLine} from '../components/style'

export default function Divisor() {

    return (

        <Div>
        <DivisorLine></DivisorLine>
        <Image style={{ width: 40, height: 41 }}
          source={iconeFacil}>
        </Image>
        <DivisorLine></DivisorLine>
      </Div>
    )
}
