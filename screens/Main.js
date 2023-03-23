import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert

} from "react-native";
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';


export default function Main({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
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

        <View style={styles.menuBar}>
          <Ionicons name="person-circle" size={40} color="black" />
          {/* <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={40} color="black" /> */}
          <Pressable
            onPress={() => setModalVisible(true)}>
            {/* <Text style={styles.textStyle}>Show Modal</Text> */}
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={40} color="black" />
          </Pressable>
        </View>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>친구추가</Text>
                <Text style={styles.modalText}>모임생성</Text>
                {/* <Text style={styles.modalText}>관리자/멤버 설정</Text>
                <Text style={styles.modalText}>모임 이미지 설정</Text>
                <Text style={styles.modalText}>모임 이름 설정</Text>  이것들은 관리자 영역*/} 
                <Text style={styles.modalText}>고객센터</Text>

                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}>
                  <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={40} color="black" />
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </View>

      <View style={styles.current}>
        <Feather style={styles.diary} name="book" size={55} color="black"/>
        <Text style={styles.currentDiaryName}>A</Text>
      </View>

      

      <View style={styles.calendarContainer}>
        <Calendar style={styles.calendar} />
      </View>

      <Text style={styles.today}>오늘의 우비들</Text>

      <View style={styles.members}>
        <ScrollView horizontal pagingEnabled>
          <Ionicons style={styles.person} name="person-outline" size={50} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={50} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={50} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={50} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={50} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={50} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={50} color="black" />
          <Ionicons style={styles.person} name="person-outline" size={50} color="black" />
        </ScrollView>
      </View>
  
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Write")}
          style={styles.write}
        >
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

  header: {
    flexDirection: 'row',
    alignContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20
  },

  calendarContainer: {
    width: 350
  },

  menuBar: {
    flexDirection: 'row',

  },

  list: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 60
  },

  today: {
    alignSelf: "flex-start",
    marginHorizontal: 30,
    marginTop: 30,
    fontSize: 20,
    letterSpacing: 3,
  },

  current: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginBottom: 20
  },

  currentDiaryName: {
    marginLeft: 10,
    fontSize: 30,
      textAlignVertical: 'center',
      ...Platform.select({
          ios: {
              lineHeight: 60 // as same as height
          },
          android: {}
        })
  },


  members: {
    flexDirection: 'row',
    margin: 30,
    marginLeft: 50,
    marginRight: 50
  },

  person: {
    padding: 10,
  },

  write: {
    backgroundColor: "gold",
    borderColor: "gold",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },

  diary: {
    flexDirection: "column",
    alignItems: "center",
  },


  centeredView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 20
  },
});
