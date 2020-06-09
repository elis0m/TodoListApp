import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import ToDo from "./ToDo";

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newToDo: ""
  };

  render(){
    const { newToDo } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>elisom's Todo List</Text>
        <View style={styles.content}>
          <TextInput 
            style={styles.input} 
            placeholder={"Write your DO"}  
            value={newToDo} 
            onChangeText={this._controlNewToDo} 
            returnKeyType={"done"}
          />
          <ScrollView>
            <ToDo />
          </ScrollView>
        </View>
      </View>
    );
  }
 
  _controllNewToDo = text => {
    this.setState({
      newToDo: text
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#726a95',
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 25,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: "300"
  },
  content: {
    backgroundColor: "white",
//    flex: 1,
    width: width - 40,
    height: height - 150,
    borderRadius: 20,
    ...Platform.select({
      ios:{
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    fontSize:15,
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1
  }
});
