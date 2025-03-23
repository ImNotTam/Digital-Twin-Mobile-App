import { View, StyleSheet } from "react-native";
import React from "react";

import ExploreBar from "@/components/explore/exploreBar";
import ExploreScanBar from "@/components/explore/exploreScanBar";
import ExploreModel from "@/components/explore/exploreModel";

const Explore = () => {
  return (
    <View style={style.view}>
      <ExploreBar />
      <ExploreScanBar />
      <ExploreModel />
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 25,
    rowGap: 30,
  },
});

export default Explore;
