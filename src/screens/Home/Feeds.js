import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class Feeds extends Component{
    render(){
        return(
            <View>
                <Text style={styles.textFeeds}>{this.props.data.lesson}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textFeeds:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});