import React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() =>
            navigation.navigate("Workout", {
              image: item.image,
              excersises: item.excersises,
              id: item.id,
            })
          }
          style={styles.imageContainer}
          key={key}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.name}>{item.name}</Text>
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={24}
            color="black"
            style={styles.icons}
          />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 20,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  image: {
    width: "95%",
    height: 140,
    borderRadius: 7,
  },
  name: {
    position: "absolute",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    left: 20,
    top: 10,
  },
  icons: {
    position: "absolute",
    color: "white",
    bottom: 10,
    left: 20,
  },
});

export default FitnessCards;
