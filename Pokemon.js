import React, {Component} from 'react';
import {View, TextInput, Image } from 'react-native';
import {Container, Content, Header, Form, Input, Item, Label, Button,Text} from 'native-base';

import style from './style';
import {Audio} from 'expo-av';

const source = require('./assets/love.mp3');

Playdata = (name)=>{
  const playbackObject = Audio.Sound.createAsync(
    { uri: `https://play.pokemonshowdown.com/audio/cries/${name}.mp3`},
    { shouldPlay: true}
  );
}

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
        <Button 
          full
          rounded
          success
          onPress ={()=>this.Playdata(name)}>
          <Text style= {{color:'white',marginTop :10,fontSize:20}}>Sons</Text>
        </Button>
        
      </View>

    );
  
}
