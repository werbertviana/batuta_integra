import React from 'react';
import iconeMedio from '../assets/imgs/iconeMedio.png';
import {Div, DivisorLine, ImageNivel} from '../components/style'

export default function Divisor() {

  return (

      <Div>
      <DivisorLine></DivisorLine>
      <ImageNivel
        source={iconeMedio}>
      </ImageNivel>
      <DivisorLine></DivisorLine>
    </Div>
  )
}