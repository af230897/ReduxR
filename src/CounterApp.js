

import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View, 
        TouchableOpacity,
      } from 'react-native';
      import {connect} from 'react-redux';



 class CounterApp extends Component {
   
  
    
    


  render() {
    
    return (
      <View style={styles.container}>
      <View style={{flexDirection : 'row' , width : 200 , justifyContent : 'space-between'}}>
        
      <TouchableOpacity 
        onPress={()=>this.props.increaseCounter()}
        style={styles.touch}
        >
          <Text>increase</Text>
        </TouchableOpacity>
       
        <Text>{this.props.counter}</Text>

        <TouchableOpacity 
        onPress={()=>this.props.decreaseCounter()}
        style={styles.touch}
        >
          <Text>decrease</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
    return{
      counter : state.counter
    }
}

function mapDispatchToProps(dispatch){
  return{
    increaseCounter : () => dispatch({type : 'INCREASE_COUNTER'}),
    decreaseCounter : () => dispatch({type : 'DECREASE_COUNTER'}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);

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
    backgroundColor : 'lightblue'
  }
});
