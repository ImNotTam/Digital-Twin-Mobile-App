import { Text, View, ScrollView, StyleSheet } from "react-native";

import SearchBar from "@/components/homePage/SearchBar";
import Header from "@/components/homePage/Header";
import RecentTree from "@/components/homePage/RecentTree";
import Farm from "@/components/homePage/Farm";

export default function Index() {
  return (
    <ScrollView style={styles.scroolView}>
      <Header />
      <SearchBar />
      <RecentTree />
      <Farm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroolView: {
    padding: 15,
  },
});
