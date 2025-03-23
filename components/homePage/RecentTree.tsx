import { View, Text, StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router";
import TreeCard from "@/components/homePage/TreeCard";

const treeList = [
  {
    id: 1,
    name: "Japanese Maple tree",
    image:
      "https://www.gardeningknowhow.com/wp-content/uploads/2020/11/japanese-maple-tree.jpg",
  },
  {
    id: 2,
    name: "Live Oaks tree",
    image:
      "https://th.bing.com/th/id/R.46a0d1564b50b8ab8bedb93681497d86?rik=tRR%2fobgXczN1eg&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    name: "Paper Birch tree",
    image:
      "https://th.bing.com/th/id/OIP.B9NnSbp9QVgoHsFK-Y_RWwHaIE?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    name: "Pine tree",
    image:
      "https://th.bing.com/th/id/R.fa66dca62b8391fafdc11345566a2375?rik=3SAnnV10ojl7AQ&riu=http%3a%2f%2ffc00.deviantart.net%2ffs9%2fi%2f2006%2f050%2f2%2f1%2fPine_Tree_in_Winter_by_DP_Stock.jpg&ehk=1yD%2bAf5P9lQlrnzVhAn9jl0ZFSoc21HvUppAt0oWjj8%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 5,
    name: "Bonsai tree",
    image:
      "https://www.thespruce.com/thmb/dCx5uAgJGsWQo9W8FY3gicXVbVQ=/1634x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bonsai-Pine-Tree_GettyImages-607466734-b94442f3a47c4046aae4997031ec0421.jpg",
  },
];

const RecentTree = () => {
  return (
    <View style={RTstyles.view1}>
      <RecentTreeSection />
      <View>
        <FlatList
          data={treeList}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <TreeCard name={item.name} image={item.image} />
          )}
          style={RTstyles.flatlist}
        />
      </View>
    </View>
  );
};

const RecentTreeSection = () => {
  return (
    <View style={RTSstyles.view1}>
      <Text className="text-xl" style={RTSstyles.text}>
        Recent search
      </Text>
      <Link href="/" style={RTSstyles.link}>
        View all
      </Link>
    </View>
  );
};

const RTstyles = StyleSheet.create({
  view1: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: 10,
  },
  flatlist: {
    flexDirection: "row",
  },
});

const RTSstyles = StyleSheet.create({
  view1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  text: {
    fontSize: 15,
    color: "#25532E",
  },
  link: {
    color: "green",
    textDecorationLine: "underline",
  },
});

export default RecentTree;
