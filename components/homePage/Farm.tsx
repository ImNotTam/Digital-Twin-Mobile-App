import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const category = [
  {
    id: 1,
    name: "appstore-o",
    backgroundColor: "#EEF7E8",
    color: "#4B8364",
    numberPlant: 10,
  },
  {
    id: 2,
    name: "rest",
    backgroundColor: "#E6EAFA",
    color: "#5676DC",
    numberPlant: 8,
  },
  {
    id: 3,
    name: "home",
    backgroundColor: "#FCF1E3",
    color: "#E6B44C",
    numberPlant: 12,
  },
  {
    id: 4,
    name: "flag",
    backgroundColor: "#F8E8F8",
    color: "#A559D9",
    numberPlant: 15,
  },
];

const Farm = () => {
  return (
    <View style={FarmStyle.view}>
      <FarmBar />
      <FarmCategory />
    </View>
  );
};

const FarmCategory = () => {
  return (
    <View style={FarmCategoryStyle.view}>
      {category.map((item) => (
        <FarmCard
          key={item.id}
          id={item.id}
          name={item.name}
          color={item.color}
          backgroundColor={item.backgroundColor}
          numberPlant={item.numberPlant}
        />
      ))}
    </View>
  );
};

const FarmBar = () => {
  return (
    <View style={FarmBarStyle.view}>
      <View>
        <Text style={FarmBarStyle.text1}>Farm</Text>
      </View>
      <View>
        <Text style={FarmBarStyle.text2}>View all</Text>
      </View>
    </View>
  );
};

type FarmCardProps = {
  id: number;
  name: string;
  color: string;
  backgroundColor: string;
  numberPlant: number;
};

const FarmCard = (props: FarmCardProps) => {
  return (
    <View style={FarmCardStyle.view}>
      <View
        style={{
          backgroundColor: props.backgroundColor,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: props.color,
        }}
      >
        <AntDesign
          name={
            props.name === "appstore-o"
              ? "appstore-o"
              : props.name === "rest"
              ? "rest"
              : props.name === "home"
              ? "home"
              : "flag"
          }
          size={20}
          color={props.color}
        />
      </View>
      <View style={FarmCardStyle.view2}>
        <View>
          <Text style={FarmCardStyle.text21}>{props.numberPlant} plants</Text>
        </View>
        <View>
          <Text>HCMUT{props.id}</Text>
        </View>
      </View>
    </View>
  );
};

const FarmStyle = StyleSheet.create({
  view: {
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: 10,
    marginBottom: 15,
  },
});

const FarmCategoryStyle = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: 15,
  },
});

const FarmBarStyle = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    color: "#318209",
    fontSize: 15,
  },
  text2: {
    color: "#318209",
    fontSize: 15,
    textDecorationLine: "underline",
  },
});

const FarmCardStyle = StyleSheet.create({
  view: {
    flexDirection: "row",
    columnGap: 15,
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: "40%",
  },
  view2: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  text21: {
    color: "#628093",
    fontSize: 12,
    fontWeight: "semibold",
  },
  text22: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Farm;
