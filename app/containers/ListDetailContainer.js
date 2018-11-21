import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert
} from "react-native"
import flatListData from '../data/flatListData'


class ListDetailContainer extends Component {
    constructor(props) {
        super(props)
    }

    _onPressItem = () => {

    }

    componentWillMount() {
        flatListData.forEach(item => {
            if (item.key == this.props.item.key){
                this.name = item.name;
                this.description = item.foodDescription;
                return
            }
        });
    }

    render() {

        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ padding: 10, fontSize: 40, fontWeight: 'bold' }}>ITEM</Text>
                <Text style={{ padding: 10, fontSize: 20 }}>Key: {this.props.item.key}</Text>
                <Text style={{ padding: 10, fontSize: 20 }}>Name: {this.name}</Text>
                <Text style={{ padding: 10, fontSize: 20 }}>{this.description}</Text>

            </View>
        )
    }

}

export default ListDetailContainer
