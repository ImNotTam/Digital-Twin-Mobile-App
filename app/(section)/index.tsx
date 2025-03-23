import { View, ScrollView, StyleSheet } from "react-native";

import SearchBar from "@/components/homePage/SearchBar";
import Header from "@/components/homePage/Header";
import RecentTree from "@/components/homePage/RecentTree";
import Farm from "@/components/homePage/Farm";

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.view}>
        <Header />
        <SearchBar />
        <RecentTree />
        <Farm />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    justifyContent: "flex-start",
    rowGap: 20,
    padding: 10,
  },
});
