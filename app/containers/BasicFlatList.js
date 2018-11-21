import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert
} from "react-native"
import flatListData from '../data/flatListData'
import {Actions} from 'react-native-router-flux'


class FlatListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRowKey: null
        }
    }

    _onPressItem = () => {
        Actions.flatListDetail(this.props)
    }

    render() {

        return (
            <TouchableOpacity onPress={this._onPressItem}>
                <View style={{
                    flex: 1,
                    backgroundColor: this.props.index % 2 == 0 ? 'green': 'mediumseagreen'
                    }}>
                    <Text style={{color: 'white', padding: 8, fontSize: 16}}>{this.props.item.name}</Text>
                    <Text style={{color: 'white', padding: 8, fontSize: 16}}>{this.props.item.foodDescription}</Text>

                </View>
            </TouchableOpacity>
        )
    }

}


class BasicFlatList extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            deletedRowKey: null,
        })
    }

    refreshFlatList = (deletedKey) => {
        this.setState((prevState) => {
            return{
                deletedRowKey: deletedKey
            }
        })
    }
    _onPressAdd = () => {
        // alert("asd")
        
    }

    render() {

        return (
            <View style={{flex: 1, marginTop: 22}}>
                <View style={{backgroundColor: 'tomato', height: 60,flexDirection:'row',
                     justifyContent: 'flex-end', alignItems: 'center'}}>
                    <TouchableOpacity style={{marginRight: 10, }} onPress={this._onPressAdd}>
                        <Text style={{fontSize:28}}>ADD</Text>
                    </TouchableOpacity>
                </View>
                <FlatList data={flatListData} renderItem={({item, index}) => {
                    // console.log(`Item = ${item}, key = ${index}`)
                    return(
                        <FlatListItem item={item} index={index} parentFlatList={this}/>
                    )
                }}>
                
                </FlatList>
                
            </View>
        )
    }

}

export default BasicFlatList
