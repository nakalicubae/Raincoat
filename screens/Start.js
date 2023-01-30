import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={styles.signUpBtn}
      >
        <Text>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  signUpBtn: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  }
});
