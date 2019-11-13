// Import React Library
import React from 'react';

// Import Text adn Stylesheet components from react-native
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hey, how you doing?';

  const textElement = <Text>Variable containing Text element</Text>

  const name = 'Heinz Araque';


  return (
    <View>

      <Text style={styles.textStyle}>This is the component screen</Text>

      <Text>Using View to group Text together </Text>

      <Text>{greeting}</Text>

      {textElement}

      <Text>JSX Exercise:</Text>

      <Text style={styles.exerciseStyle}> Getting started with React Native</Text>

      <Text style={styles.nameStyle}>My name is {name}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: '#00ffff',
  },
  exerciseStyle: {
    fontSize: 45,
    color: 'blue'
  },
  nameStyle: {
    fontSize: 20,
    color: 'orange'
  }
});

export default ComponentsScreen;