import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Write({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.menubar}>
        <Ionicons name="text" size={24} color="black" />
        <MaterialCommunityIcons name="draw" size={24} color="black" />
        <Feather name="image" size={24} color="black" />
        <MaterialCommunityIcons name="sticker-emoji" size={24} color="black" />
      </View>

      <View style={styles.diary}>
      </View>
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

  menubar: {
    flexDirection: "row",
    alignItems: "center",
  },

});
