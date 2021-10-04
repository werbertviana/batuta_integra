import React from 'react';
import iconeDificil from '../assets/imgs/iconeDificil.png';
import {Div, DivisorLine, ImageNivel} from '../components/style'

export default function Divisor() {

  return (

      <Div>
      <DivisorLine></DivisorLine>
      <ImageNivel
        source={iconeDificil}>
      </ImageNivel>
      <DivisorLine></DivisorLine>
    </Div>
  )
}