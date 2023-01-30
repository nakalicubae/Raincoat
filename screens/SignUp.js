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
        <Text style={styles.emailText}>이메일</Text>
        <TextInput
          placeholder="이메일을 입력하세요."
          style={styles.emailInput}
        />
        <TouchableOpacity style={styles.authReq}>
          <Text style={styles.authReqText}>인증 요청</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.auth}>
        <TextInput style={styles.authCode} />
        <Text style={styles.authTime}>4:39</Text>
        <TouchableOpacity style={styles.authSend}>
          <Text style={styles.authSendText}>인증 확인</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pw}>
        <Text style={styles.pwText}>비밀번호</Text>
        <TextInput
          placeholder="비밀번호를 입력하세요."
          style={styles.pwInput}
        />
      </View>

      <View style={styles.pw}>
        <Text style={styles.pwText}>비밀번호 확인</Text>
        <TextInput
          placeholder="비밀번호를 입력하세요."
          style={styles.pwInput}
        />
      </View>

      <View style={styles.nickname}>
        <Text style={styles.nicknameText}>닉네임</Text>
        <TextInput
          placeholder="닉네임을 입력하세요."
          style={styles.nicknameInput}
        />
        <TouchableOpacity style={styles.authReq}>
          <Text style={styles.authReqText}>중복 확인</Text>
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
    //backgroundColor: "blue"
    marginHorizontal: 20,
    marginVertical: 5,
  },

  emailText: {
    //fontSize: 18,
    //fontWeight: "600",
  },

  emailInput: {
    flex: 1,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
  },

  authReq: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
  },

  authReqText: {
    color: "white",
  },

  auth: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 5,
  },

  authCode: {
    flex: 1,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },

  authTime: {
    marginHorizontal: 10,
  },

  authSend: {
    backgroundColor: "black",
    borderRadius: 10,
    //fontSize: 18,
    padding: 10,
  },

  authSendText: {
    color: "white",
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
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginLeft: 10,
  },

  nickname: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 5,
  },

  nicknameInput: {
    flex: 1,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
  }
});
