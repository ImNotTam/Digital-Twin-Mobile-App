import { View, StyleSheet } from "react-native";
import React from "react";
import ProfileBar from "@/components/profile/profileBar";
import ProfileInfo from "@/components/profile/profileInfo";
import ButtonLogOut from "@/components/profile/buttonLogOut";

const Profile = () => {
  return (
    <View style={style.view}>
      <ProfileBar />
      <ProfileInfo />
      <ButtonLogOut />
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
  },
});

export default Profile;
