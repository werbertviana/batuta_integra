import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import Header from '../../components/Header';
import Buttom from '../../components/Buttom';
import Divisor from '../../components/DivDificil'
import chord01 from '../../assets/imgs/chord01.png';
import chord02 from '../../assets/imgs/chord02.png';
import chord03 from '../../assets/imgs/chord03.png';
import chord04 from '../../assets/imgs/chord04.png';


export default function App() {

  return (

    <SafeAreaView style={styles.background}>
      <Header></Header>
      <Divisor></Divisor>
      <Text style={styles.questionText}>Qual alternativa reproduz um Acorde Perfeito Maior?</Text>
      <SafeAreaView style={styles.questionsContainer}>
        <Image style={styles.imageQuestions}
          source={chord01}>
        </Image>
        <Image style={styles.imageQuestions}
          source={chord02}>
        </Image>
        <Image style={styles.imageQuestions}
          source={chord03}>
        </Image>
        <Image style={styles.imageQuestions}
          source={chord04}>
        </Image>

      </SafeAreaView>
      <Buttom></Buttom>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  questionsContainer: {
    marginTop: '2%',
    height: '65%',
    width: '90%',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    //flexWrap: 'wrap',
  },
  imageQuestions: {
    marginTop: '2%',
    width: 280,
    height: 110,
    margin: 8,
  },
  questionText: {
    fontFamily: 'GothamCondensed-Medium',
    fontSize: 24,
    marginTop: '2%'
  }

});