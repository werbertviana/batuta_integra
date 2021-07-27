import React from 'react';
import { StyleSheet, Image, SafeAreaView} from 'react-native';
import LOGO from '../assets/imgs/LOGO.png';


export default props => {

    return (  
            <SafeAreaView style={styles.containerLogo}>
                <Image style={styles.logo}
                    source={LOGO}>
                </Image>
            </SafeAreaView> 
    );
}

const styles = StyleSheet.create({

    containerLogo: {
        justifyContent: 'center',
        //backgroundColor: '#FDC500',
        height: '50%',
        width: '90%',
        alignContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 265,
        height: 335,
    }   
});