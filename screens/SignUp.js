import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.email}>
        <Text style={styles.text}>이메일</Text>
        <TextInput placeholder="이메일을 입력하세요." style={styles.input} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>인증 요청</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.auth}>
        <TextInput style={styles.input} />
        <Text style={styles.text}>4:39</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>인증 확인</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.hr} />

      <View style={styles.pw}>
        <Text style={styles.text}>비밀번호</Text>
        <TextInput placeholder="비밀번호를 입력하세요." style={styles.input} />
      </View>

      <View style={styles.pw}>
        <Text style={styles.text}>비밀번호 확인</Text>
        <TextInput placeholder="비밀번호를 입력하세요." style={styles.input} />
      </View>

      <View style={styles.hr} />

      <View style={styles.name}>
        <Text style={styles.text}>닉네임</Text>
        <TextInput placeholder="닉네임을 입력하세요." style={styles.input} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>중복 확인</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signUp}>
        <Text style={styles.text}>회원가입</Text>
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

  email: {
    flexDirection: "row",
    alignItems: "center",
    //backgroundColor: "blue"
    marginHorizontal: 15,
    marginVertical: 5,
  },

  auth: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 5,
  },

  pw: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 5,
  },

  name: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 5,
  },

  input: {
    flex: 1,
    borderRadius: 10,
    borderColor: "gold",
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
  },

  btn: {
    backgroundColor: "gold",
    borderColor: "gold",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },

  text: {
    marginHorizontal: 5,
  },

  signUp: {
    backgroundColor: "gold",
    borderColor: "gold",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },

  hr: {
    width: "90%",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});
