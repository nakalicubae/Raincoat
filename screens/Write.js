import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Canvas, CanvasRef } from "@benjeau/react-native-draw";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Write({ navigation }) {
  const [writable, setWritable] = useState(true);
  const [editMode, setEditMode] = useState("write");

  const write = () => {
    setEditMode("write");
    setWritable(true);
  };

  const draw = () => {
    setEditMode("draw");
    setWritable(false);
  };

  const picture = () => {
    setEditMode("picture");
    setWritable(false);
  };

  const sticker = () => {
    setEditMode("sticker");
    setWritable(false);
    alert(`준비 중입니다!`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.menuBar}>
        <TouchableOpacity onPress={write} style={styles.menuItem}>
          <Ionicons
            name="text"
            size={30}
            color={editMode == "write" ? "gold" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={draw} style={styles.menuItem}>
          <MaterialCommunityIcons
            name="draw"
            size={30}
            color={editMode == "draw" ? "gold" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={picture} style={styles.menuItem}>
          <Feather
            name="image"
            size={30}
            color={editMode == "picture" ? "gold" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={sticker} style={styles.menuItem}>
          <MaterialCommunityIcons
            name="sticker-outline"
            size={30}
            color={editMode == "sticker" ? "gold" : "black"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <TextInput
          style={styles.diary}
          borderColor={editMode == "write" ? "gold" : "black"}
          multiline={true}
          placeholder="오늘의 우비를 쓰세요 :D"
          editable={writable}
          returnKeyType="done"
          blurOnSubmit={true}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Main")}
        style={styles.completeBtn}
      >
        <Text style={styles.completeText}>완료</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },

  menuBar: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginRight: 10,
  },

  menuItem: {
    padding: 2,
  },

  body: {
    flex: 1,
    margin: 10,
  },

  diary: {
    flex: 1,
    //borderColor: "gold",
    borderWidth: 2,
    padding: 5,
  },

  completeBtn: {
    alignSelf: "center",
    backgroundColor: "gold",
    borderColor: "gold",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 50,
  },

  completeText: {
    //fontSize: 16,
  },
});
