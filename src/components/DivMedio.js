import React from 'react';
import { Image } from 'react-native';
import iconeMedio from '../assets/imgs/iconeMedio.png';
import {Div, DivisorLine} from '../components/style'

export default function Divisor() {

  return (

      <Div>
      <DivisorLine></DivisorLine>
      <Image style={{ width: 40, height: 41 }}
        source={iconeMedio}>
      </Image>
      <DivisorLine></DivisorLine>
    </Div>
  )
}