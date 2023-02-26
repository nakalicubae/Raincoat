import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';



export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.menuBar}>
        <Ionicons name="person-circle" size={40} color="black" />
        <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={40} color="black" />
      </View>

      <View style={styles.list}>
        <ScrollView horizontal pagingEnabled>
          <View style={styles.diary} >
          <Feather name="book" size={40} color="black"/>
            <Text>A</Text>
          </View>
          
          <View style={styles.diary} >
          <Feather name="book" size={40} color="black"/>
            <Text>B</Text>
          </View>
          <View style={styles.diary} >
          <Feather name="book" size={40} color="black"/>
            <Text>C</Text>
          </View>
          <View style={styles.diary} >
          <Feather name="book" size={40} color="black"/>
            <Text>D</Text>
          </View>
          <View style={styles.diary} >
          <Feather name="book" size={40} color="black"/>
            <Text>E</Text>
          </View>
          <View style={styles.diary} >
          <Feather name="book" size={40} color="black"/>
            <Text>F</Text>
          </View>
          <View style={styles.diary} >
          <Feather name="book" size={40} color="black"/>
            <Text>G</Text>
          </View>
          <View style={styles.diary} >
          <Feather name="book" size={40} color="black"/>
            <Text>H</Text>
          </View>
        </ScrollView>
        <MaterialCommunityIcons name="arrow-right-drop-circle" size={30} color="black" />
      </View>

      <View style={styles.calendarContainer}>
        <Calendar style={styles.calendar} />
      </View>

      <Text style={styles.today}>오늘의 우비들</Text>

      <View style={styles.members}>
        <View View style={styles.member}>
          <Ionicons style={styles.person} name="person-outline" size={40} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={40} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={40} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={40} color="black" />
        </View>
        <View View style={styles.member}>
          <Ionicons style={styles.person} name="person-outline" size={40} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={40} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={40} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={40} color="black" />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  menuBar: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  list: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingRight: 60,
  },


  today: {
    alignSelf: 'flex-start',
    marginHorizontal: 30,
    marginTop: 30,
    fontSize: 20,
    letterSpacing: 3
  },

  members: {
    marginTop: 10
  },

  member: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
  },

  person: {
    padding: 10
  },

  write: {
    backgroundColor: 'gold',
    borderColor: 'gold',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },

  diary: {
    flexDirection: "column",
    alignItems: "center",
  },

});
