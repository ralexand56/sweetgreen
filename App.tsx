/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

interface Props {}
export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Seasonal</Text>
      <Text style={styles.instructions}>To get started, edit App.tsx</Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c4e46"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white",
    letterSpacing: 2
  },
  instructions: {
    textAlign: "center",
    color: "white",
    marginBottom: 5
  }
});
