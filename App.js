import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#726a95',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    top: 30,
    textDecorationColor: "white"
  }
});
