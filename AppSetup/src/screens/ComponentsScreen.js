// Import React Library
import React from 'react';

// Import Text adn Stylesheet components from react-native
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  return (
    <Text style={styles.textStyle}> This is the component screen</Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: '#00ffff',
  }
});

export default ComponentsScreen;