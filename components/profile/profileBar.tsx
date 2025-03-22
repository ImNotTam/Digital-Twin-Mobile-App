import { Text, View, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const ProfileBar = () => {
  return (
    <View style={style.view}>
      <View style={style.view1}>
        <AntDesign name="left" size={12} color="black" />
      </View>
      <View>
        <Text style={style.text}>Profile</Text>
      </View>
      <View>
        <AntDesign name="bells" size={20} color="black" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  view1: {
    padding: 15,
    backgroundColor: "#F5EEEE",
    borderRadius: 10,
    borderWidth: 0.1,
    borderColor: "black",
  },
  text: { fontSize: 20, fontWeight: "bold" },
});

export default ProfileBar;
