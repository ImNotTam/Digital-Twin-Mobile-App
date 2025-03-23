import { View, Image, StyleSheet } from "react-native";
import React from "react";

const ExploreModel = () => {
  return (
    <View style={style.view}>
      <Image
        style={style.image}
        source={{
          uri: "https://th.bing.com/th/id/R.b3693950c4e99820008b3499c6bbc737?rik=oIJLONkZAo7qqA&pid=ImgRaw&r=0",
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "70%",
    borderRadius: 10,
  },
});

export default ExploreModel;
