import React from 'react';
import {Image} from 'react-native';
import {HeaderContainer} from '../components/style'
import iconeX from '../assets/imgs/iconeX.png';
import iconeLife from '../assets/imgs/iconeLife.png';
import barra from '../assets/imgs/barra.png'

export default function Header() {

    return (

            <HeaderContainer>
                <Image style={{ width: 25, height: 26 }}
                    source={iconeX}>
                </Image>
                <Image style={{ width: 260, height: 16 }}
                    source={barra}>
                </Image>
                <Image style={{ width: 25, height: 47 }}
                    source={iconeLife}>
                </Image>
            </HeaderContainer>
    )
}
