import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const ProfileInfo = () => {
  return (
    <View style={style.view}>
      <View style={style.view1}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/a6/49/34/a64934b94ce8e28b86941ce84e509c30.jpg",
          }}
          style={style.image}
        />
      </View>
      <View>
        <Text style={style.text1}>Huynh Thanh Tam</Text>
      </View>
      <View>
        <Text style={style.text2}>tam.huynhk22cs@hcmut.edu.vn</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    flexDirection: "column",
    alignItems: "center",
  },
  view1: {
    padding: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 20,
    color: "grey",
  },
});

export default ProfileInfo;
