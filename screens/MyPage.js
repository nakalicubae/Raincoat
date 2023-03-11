import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

export default function MyPage({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <AntDesign name="left" size={24} color="black" />
        <View style={styles.subHeader}>
          <Text style={styles.headerText}>내 정보</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text style={styles.headerText}>확인</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        {image == null ? (
          <View style={styles.image}>
            <TouchableOpacity onPress={pickImage}>
              <AntDesign name="picture" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        ) : (
          image && <Image source={{ uri: image }} style={styles.image} />
        )}

        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.infoText}>이메일</Text>
            <TextInput maxLength={30} style={styles.infoInput} />
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>이름</Text>
            <TextInput maxLength={16} style={styles.infoInput} />
          </View>
          <TouchableOpacity style={styles.infoBtn}>
            <Text>비밀번호 변경</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Start")}>
          <Text style={styles.footerText}>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Start")}>
          <Text style={styles.footerText}>회원탈퇴</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "white",
  },

  header: {
    marginTop: 60,
    marginBottom: 20,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },

  subHeader: {
    flex: 1,
    alignItems: "center",
  },

  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },

  body: {
    flex: 1,
  },

  image: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#dcdcdc",
    borderRadius: 100,
    height: 160,
    width: 160,
    marginVertical: 30,
  },

  infoContainer: {
    flex: 1,
    marginHorizontal: 20,
    //backgroundColor: "pink",
  },

  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingVertical: 5,
  },

  infoText: {
    padding: 10,
  },

  infoInput: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
  },

  infoBtn: {
    alignSelf: "center",
    borderColor: "gold",
    backgroundColor: "gold",
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 30,
  },

  footerText: {
    paddingHorizontal: 5,
  },
});
