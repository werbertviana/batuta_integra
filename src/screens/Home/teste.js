import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList
} from 'react-native';

import Feeds from './Feeds'

//import api
import api from '../../services/Api';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feeds: []
        }
    }

    async componentDidMount() {
        const response = await api.get('/feeds/');
        this.setState({
            feeds: response.data
        });
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.feeds}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Feeds data={item}> 
                        </Feeds>}
                ></FlatList>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }

});



