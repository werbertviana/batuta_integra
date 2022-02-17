import React from 'react';
import Nav from './src/navegacao'
//Redux
import { Provider } from 'react-redux'
import configStore from './src/store/storeConfig'

export default function App() {

    const store = configStore();

    return (
        <Provider store={store}>
            <Nav></Nav>
        </Provider>
    )
}