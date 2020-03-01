import React, {Component} from 'react'
import {View, TextInput, Button, Text, Image } from 'react-native';
import style from './style';


export default function HomeScreen({ navigation, route }) {

    const { name } = route.params;
    const { id } = route.params;

    return (
      <View style={style.alldiv}>
        <View style={style.img}>
          <Image source = {{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(id)}.png`}}
            style = {{ width: 200, height: 200 }}
          />
        </View>
        <View style={style.texte}>
        <Text style={{fontSize:44, justifyContent:'center'}}> {name} </Text>
        </View>
      </View>
    )
  
}
