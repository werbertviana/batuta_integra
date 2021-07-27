import React from 'react';
import {Image} from 'react-native';
import iconeDificil from '../assets/imgs/iconeDificil.png';
import {Div, DivisorLine} from '../components/style'

export default function Divisor() {

  return (

      <Div>
      <DivisorLine></DivisorLine>
      <Image style={{ width: 40, height: 41 }}
        source={iconeDificil}>
      </Image>
      <DivisorLine></DivisorLine>
    </Div>
  )
}