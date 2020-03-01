import React, {Component} from 'react';
import style from './style';
import { StyleSheet,ActivityIndicator, Text, View, FlatList, Image, TextInput, Button, Alert} from 'react-native';



export default class App extends Component {
    constructor(props){
      super(props); 
      this.state = { chargement : true}
    }
    
    componentDidMount(){
      return fetch('https://pokeapi.co/api/v2/pokemon?limit=100').then((res)=>(res.json())).then((responseJson)=>{
        this.setState({
          chargement : false,
          dataSource : responseJson.results,
    });
  
    }).catch((error) =>{
        console.error(error);
      });
    }
    
  
    render(){
      console.disableYellowBox == true;
  
      if(this.state.chargement){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
  
      return (
        
        <View style={style.firtDiv}>
            <FlatList 
              data={this.state.dataSource}
                renderItem={({ item }) => (
                  <Text style={style.FlatList} onPress={()=>{this.props.navigation.navigate('Pokemon', {id: item.url.split('/')[6], name: item.name}); 
                  }}>
                        <Image style={{ width: 50, height: 50}}source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(item.url).split('/')[6]}.png`}}/> 
                    <Text>{item.name}{"\n"}</Text>          
                  </Text>
                )}        
            />
        </View>
      );
    }
}