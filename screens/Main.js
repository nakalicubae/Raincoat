import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Divider } from 'react-native-elements'
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
 import {Calendar, CalendarList, Agenda} from 'react-native-calendars';



export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={30} color="black" />
      </View>

      <View style={styles.list}>
        <ScrollView horizontal pagingEnabled>
          <Feather name="book" size={50} color="black" />
          <Feather name="book" size={50} color="black" />
          <Feather name="book" size={50} color="black" />
          <Feather name="book" size={50} color="black" />
          <Feather name="book" size={50} color="black" />
          <Feather name="book" size={50} color="black" />
          <Feather name="book" size={50} color="black" />
          <Feather name="book" size={50} color="black" />
        </ScrollView>
        <MaterialCommunityIcons name="arrow-right-drop-circle" size={30} color="black" />
      </View>

      <View style={styles.calendarContainer}>
        <Calendar style={styles.calendar} />
      </View>

      <View>
        <Text style={styles.today}>오늘의 우비들</Text>
        <View style={styles.members}>
          <Ionicons style={styles.person} name="person-outline" size={50} color="black" />
          <Ionicons style={styles.person}name="person-outline" size={50} color="black" />
          <Ionicons style={styles.person}name="person-outline" size={50} color="black" />
          <Ionicons style={styles.person}name="person-outline" size={50} color="black" />
        </View>
      </View>

      <View>
        <TouchableOpacity
        onPress={() => navigation.navigate("Write")}
        style={styles.write}>
          <Text>우비쓰기</Text>
        </TouchableOpacity>
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

  menuBar: {
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  list: {
    flexDirection: "row",
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 10,
    marginBottom: 30,
  },

  today: {
    alignSelf: 'flex-start',
    marginVertical: 30,

  },

  members: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },

  person: {
    padding: 10
  },

  write: {
    backgroundColor: "gold",
    borderColor: "gold",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
});
