import { View, Text, StyleSheet } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

const ExploreScanBar = () => {
  return (
    <View style={style.view}>
      <View style={{ padding: 10 }}>
        <Text style={style.text1}>Tree's name</Text>
      </View>
      <View style={style.view2}>
        <View>
          <Text style={style.text2}>Thriving</Text>
        </View>
        <View style={style.view22}>
          <Progress.Bar width={200} progress={0.7} color="#7D9152" />
          <Text>70%</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
    width: "90%",
  },
  text1: {
    fontSize: 20,
  },
  view2: {
    padding: 10,
    flexDirection: "column",
    width: "100%",
    gap: 10,
    backgroundColor: "#E2E3E3",
    borderRadius: 10,
  },
  text2: {
    fontSize: 15,
  },
  view22: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
});

export default ExploreScanBar;
