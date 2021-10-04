import React from 'react';
import iconeFacil from '../assets/imgs/iconeFacil.png';
import {Div, DivisorLine, ImageNivel} from '../components/style'

export default function Divisor() {

    return (

        <Div>
        <DivisorLine></DivisorLine>
        <ImageNivel
          source={iconeFacil}>
        </ImageNivel>
        <DivisorLine></DivisorLine>
      </Div>
    )
}
