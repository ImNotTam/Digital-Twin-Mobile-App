import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <View className="justify-between items-center flex flex-row p-6 mb-8">
        <View className="flex flex-row justify-center items-center">
          <Text className="text-5xl font-semibold">My Plants</Text>
        </View>
        <View className="flex flex-row justify-between items-center gap-8">
          <FontAwesome name="search" size={40} />
          <FontAwesome6 name="square-plus" size={40} />
        </View>
      </View>
      <View></View>
    </>
  );
}
