import React, {Component} from 'react'
import {View, TextInput,Text, Image, StyleSheet, Alert } from 'react-native';
import {Container, Content, Header, Form, Input, Item, Label, Button} from 'native-base';
import style from './style';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDtCB7BiyGxurpahQ64WbMOAtLZSdiumKY",
  authDomain: "pokedex-efrei.firebaseapp.com",
  databaseURL: "https://pokedex-efrei.firebaseio.com",
  projectId: "pokedex-efrei",
  storageBucket: "pokedex-efrei.appspot.com",
  messagingSenderId: "272697966408",
  appId: "1:272697966408:web:6d12afa65dc526690f7d7d"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default class Inscription extends Component {
  constructor(props){
    super(props)
    this.state = ({
      email: '',
      password: ''
    })
  }

  connexion = (email, password) =>{
    try{
      if((this.state.email !== "") && (this.state.password !== "")){
        Alert.alert('connection reussit');
        this.props.navigation.navigate('Tous les pokémons');
        return;
      }else{
        Alert.alert('un des champs est vide');
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch(error){
      console.log(error.toString())
    }
  }

  inscription = (email, password) =>{
      try{firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log(user)
      })

    }
      catch(error){
        console.log(error.toString())
    }
  }

  render(){
    return (
       <Container style={styles.Container}>
         <Form>

           <Item floatingLabel>
             <Label>Email</Label>
             <Input
              autoCorrect = {false}
              autoCapitalize = "none"
              onChangeText = {(email) => this.setState({email})}
             />
           </Item>

           <Item floatingLabel>
             <Label>Password</Label>
             <Input
              secureTextEntry ={true}
              autoCorrect = {false}
              autoCapitalize = "none"
              onChangeText ="password"
              onChangeText = {(password) => this.setState({password})}
             />
           </Item>

            <Button style= {{marginTop :10}}
              full
              rounded
              primary
              onPress = {()=>this.connexion(this.state.email, this.state.password)}
              >
              <Text style= {{color:'white'}}>connexion</Text>
            </Button>

            <Button style= {{marginTop :10}}
              full
              rounded
              success
              onPress = {()=>this.inscription(this.state.email, this.state.password)}
              >
              <Text style= {{color:'white'}}>Inscription</Text>
            </Button>
         </Form>
       </Container>
    );
  } 
}

const styles = StyleSheet.create({
  Container: {
    flex : 1,
    padding: 10,
  },
});
