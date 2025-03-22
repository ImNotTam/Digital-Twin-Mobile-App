import { View, Text } from "react-native";
import { Link } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ScanSection = () => {
  return (
    <View className="items-center m-5" style={{ backgroundColor: "#EEF7E8" }}>
      <Link href="/">
        <View className="py-3 px-5 justify-center items-center flex flex-row gap-x-6 rounded-xl border-2 border-solid border-lime-600">
          <MaterialCommunityIcons
            name="line-scan"
            size={20}
            color="#61AF2B"
            className="font-semibold"
          />
          <Text className="text-xl font-semibold" style={{ color: "#61AF2B" }}>
            Scan and identify the plant
          </Text>
        </View>
      </Link>
    </View>
  );
};

export default ScanSection;
