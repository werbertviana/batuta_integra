import React from 'react';
import {
    SafeAreaView,
    TouchableWithoutFeedback,
    Text, 
} from 'react-native';


import * as Animatable from 'react-native-animatable';



export default function ModalOptions ({navigation}) {
    return(
        
       
            <Animatable.View 
            animation={"bounceIn"}
            useNativeDriver
            style={{
            width: '115%',
            height: '25%',
            backgroundColor: "#236A79",
            alignItems: 'center',
            justifyContent: 'space-around',
            alignContent: 'center',
            flexDirection: 'column',
            borderRadius: 10,
        }}>
            <TouchableWithoutFeedback>
                <SafeAreaView style={{
                    
                    width: '90%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3CB1C7',
                    borderRadius: 5,
                    margin: 2
                }}>
                    <Text style={{
                        fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#fff", fontSize: 25,
                        padding: 5
                    }}>CONTEÚDO</Text>
                    
                </SafeAreaView>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback
            onPress={()=>navigation.navigate('Atividades')}
            >
                <SafeAreaView style={{
                    width: '90%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    margin: 2
                }}>
                    <Text style={{
                        fontFamily: "GothamCondensed-Medium", textAlign: 'center', color: "#236A79", fontSize: 25,
                        padding: 5
                    }}>PRATICAR + <Text style={{color: "#FDC500"}}>10XP</Text></Text>   
                </SafeAreaView>
            </TouchableWithoutFeedback>

        </Animatable.View> 
      
    )
}