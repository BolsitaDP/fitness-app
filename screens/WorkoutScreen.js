import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../Context";
import { AntDesign } from "@expo/vector-icons";

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { completed, setCompleted } = useContext(FitnessItems);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Image
          style={styles.banner}
          source={{
            uri: route.params.image,
          }}
        />
        <Ionicons
          onPress={() => navigation.goBack()}
          style={styles.arrowBack}
          name="chevron-back-outline"
          size={35}
          color="black"
        />

        {route.params.excersises.map((item, index) => (
          <Pressable style={styles.excersiseImgContainer} key={index}>
            <Image style={styles.excersiseImg} source={{ uri: item.image }} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sets}>{item.sets}</Text>
            </View>

            {completed.includes(item.name) ? (
              <AntDesign name="check" size={24} color="purple" />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        onPress={() => {
          navigation.navigate("Fit", {
            excersises: route.params.excersises,
          });
          setCompleted([]);
        }}
        style={styles.btnContainer}>
        <Text style={styles.startBtn}>Start</Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 50,
  },
  arrowBack: {
    position: "absolute",
    top: 30,
    left: 10,
    color: "white",
  },
  banner: {
    width: "100%",
    height: 170,
  },
  excersiseImgContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  excersiseImg: {
    width: 90,
    height: 90,
  },
  info: {
    margin: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sets: {
    marginTop: 4,
    fontSize: 16,
    color: "grey",
  },
  btnContainer: {
    backgroundColor: "purple",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
    borderRadius: 7,
    width: "35%",
  },
  startBtn: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
