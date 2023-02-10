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

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.email}>
        <Text style={styles.emailText}>이메일</Text>
        <TextInput
          maxLength={30}
          placeholder="이메일을 입력하세요."
          style={styles.emailInput}
        />
      </View>

      <View style={styles.hr}></View>

      <View style={styles.pw}>
        <Text style={styles.pwText}>비밀번호</Text>
        <TextInput
          placeholder="비밀번호를 입력하세요."
          style={styles.pwInput}
        />
      </View>

      <View style={styles.find}>
        <TouchableOpacity
          onPress={() => navigation.navigate("FindEmail")}
          style={styles.findBtn}>
          <Text>이메일 찾기</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("FindPw")}
        style={styles.findBtn} >
          <Text>비밀번호 찾기</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={styles.findBtn}>
          <Text>회원가입</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
        onPress={() => navigation.navigate("Write")}
        style={styles.signInBtn}>
          <Text>로그인</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.easySignIn}>
        <TouchableOpacity
        onPress={() => navigation.navigate("Apple")}
        style={styles.easyBtn}>
          <Text>Apple로 로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("Google")}
        style={styles.easyBtn}>
          <Text>Google로 로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("Kakao")}
        style={styles.easyBtn}>
          <Text>Kakao로 로그인</Text>
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

  email: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 5,
  },

  emailText: {
  },

  emailInput: {
    flex: 1,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
  },

  pw: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 5,
  },

  pwInput: {
    flex: 1,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    marginLeft: 10,
  },

  find: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },

  findBtn: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },

  signInBtn: {
    backgroundColor: "gold",
    borderColor: "gold",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },

  easySignIn: {
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },

  easyBtn: {
    backgroundColor: "white",
    borderColor: "gold",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5
  },

  hr: {
    borderBottomColor: 'gainsboro',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
