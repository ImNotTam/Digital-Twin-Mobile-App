import { View, Image, StyleSheet, Text, Button } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";

type TreeCardProps = {
  name: string;
  image: string;
};

const TreeCard = (props: TreeCardProps) => {
  return (
    <View style={TCstyles.view1}>
      <View>
        <Image source={{ uri: props.image }} style={TCstyles.image} />
      </View>
      <View style={TCstyles.view2}>
        <View>
          <Text style={TCstyles.nameTree}>{props.name}</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={TCstyles.fullNameTree}>Full name of tree</Text>
        </View>
      </View>
      <View style={TCstyles.view2}>
        <View>
          <Text style={TCstyles.price}>Price</Text>
        </View>
        <View style={TCstyles.view3}>
          <View>
            <Fontisto
              name="sourcetree"
              size={15}
              color="#114025"
              style={{
                backgroundColor: "#1BBC65",
                opacity: 0.22,
                borderRadius: 10,
                width: 15,
              }}
            />
          </View>
          <View>
            <AntDesign
              name="eyeo"
              size={15}
              color="#3D2500"
              style={{
                backgroundColor: "#3D2500",
                opacity: 0.46,
                borderRadius: 10,
                width: 15,
              }}
            />
          </View>
        </View>
      </View>
      <View style={TCstyles.description}>
        <Text style={{ fontSize: 13 }}>Description</Text>
      </View>
      <View style={TCstyles.moreDetail}>
        <Button title="More Details" color="#114025" onPress={() => {}} />
      </View>
    </View>
  );
};

const TCstyles = StyleSheet.create({
  view1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#E7D39C",
    borderRadius: 5,
    marginRight: 20,
    padding: 10,
    width: 180,
    height: 350,
  },
  image: {
    width: 170,
    height: 160,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#25532E",
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    width: 150,
  },
  nameTree: {
    color: "#25532E",
    fontSize: 10,
    fontWeight: "bold",
  },
  fullNameTree: {
    color: "#7C5C05",
    fontSize: 5,
    fontWeight: "bold",
  },
  price: {
    color: "#7C5C05",
    fontSize: 15,
  },
  view3: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
  },
  description: {
    width: "100%",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  moreDetail: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 5,
    marginTop: "auto",
  },
});

export default TreeCard;
