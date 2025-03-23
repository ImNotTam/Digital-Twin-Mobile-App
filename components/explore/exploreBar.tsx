import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const ExploreBar = () => {
  return (
    <View style={style.view}>
      <View style={style.view1}>
        <AntDesign name="left" size={12} color="black" />
      </View>
      <View>
        <Text style={style.text}>Tree Model</Text>
      </View>
      <View style={style.view3}>
        <View>
          <AntDesign name="search1" size={24} color="black" />
        </View>
        <View>
          <AntDesign name="plussquareo" size={24} color="black" />
        </View>
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
  view3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
});

export default ExploreBar;
