import React, { useState, useEffect } from 'react';
import LOGO from '../../assets/imgs/logo03.png'
import {
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard
} from 'react-native';

export default function App({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 220, y: 220 }));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        useNativeDriver: true,
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 1,
        duration: 200,
      })
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 100,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 126,
        duration: 100,

      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 140,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 180,
        duration: 100,

      }),
    ]).start();
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          useNativeDriver
          source={LOGO}>
        </Animated.Image>

      </View>

      <Animated.View
        style={[styles.container,
        {
          opacity: opacity,
          transform: [
            { translateY: offset.y }
          ]
        }
        ]}
        useNativeDriver
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => { }}
        >
        </TextInput>

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => { }}
        >
        </TextInput>

        <TouchableOpacity style={styles.ShadowButtons1}
          onPress={() => navigation.navigate("Main")}>
          <SafeAreaView style={styles.Buttons1}>
            <Text style={styles.submitText}>ENTRAR</Text>
          </SafeAreaView>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ShadowButtons2}>
          <SafeAreaView style={styles.Buttons2}>
            <Text style={styles.registerText}>CRIAR CONTA</Text>
          </SafeAreaView>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView >
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4EAE0'
  },
  containerLogo: {
    // backgroundColor: 'blue',
    justifyContent: 'center',
  },
  container: {
    marginTop: 20,
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  submitText: {
    color: '#FFF',
    fontSize: 30,
    fontFamily: 'GothamCondensed-Medium',
  },
  registerText: {
    color: '#FFF',
    fontSize: 30,
    fontFamily: 'GothamCondensed-Medium',
  },
  ShadowButtons1: {
    width: '90%',
    height: 65,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 15,
    backgroundColor: "#DAA520",
    margin: 8
  },
  Buttons1: {
    width: '100%',
    height: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#FDC500',
  },
  ShadowButtons2: {
    width: '90%',
    height: 65,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 15,
    backgroundColor: "#236A79",
    margin: 8
  },
  Buttons2: {
    width: '100%',
    height: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#3CB1C7',
  },
});