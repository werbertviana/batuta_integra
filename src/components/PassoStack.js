import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default props => (
    <View style={styles.background}>

        {props.children}

        <View style={styles.buttomContainer}>
            {props.iniciar
                ? <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate(props.iniciar)
                    }}
                    style={styles.startButton}
                >
                    <Text style={styles.startText}>INICIAR</Text>
                </TouchableOpacity>
                : false
            }

        </View>
    </View>
)

const styles = StyleSheet.create({

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    buttomContainer: {
        marginTop: '6%',
        height: '10%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#D2D3D5'
    },
    startButton: {
        width: '90%',
        height: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: '#FDC500',
    },
    startText: {
        color: '#fff',
        fontSize: 38,
        fontFamily: 'GothamCondensed-Medium',
    }
});
