

import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View, 
        TouchableOpacity,
      } from 'react-native';



 class App extends Component {
   
  state= {
      counter : 0
    }
    
    increaseCounter =() =>{
      this.setState({counter :this.state.counter+1})
    }
    
    decreaseCounter =() =>{
      this.setState({counter :this.state.counter-1})
    }


  render() {
    
    return (
      <View style={styles.container}>
      <View style={{flexDirection : 'row' , width : 200 , justifyContent : 'space-between'}}>
        
      <TouchableOpacity 
        onPress={()=>this.decreaseCounter()}
        style={styles.touch}
        >
          <Text>increase</Text>
        </TouchableOpacity>
       
        <Text>{this.state.counter}</Text>

        <TouchableOpacity 
        onPress={()=>this.decreaseCounter()}
        style={styles.touch}
        >
          <Text>decrease</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
  touch: {
    backgroundColor : 'red'
  }
});
