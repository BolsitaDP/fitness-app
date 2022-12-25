import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FitnessItems } from "../Context";

const FitScreen = () => {
  const route = useRoute();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];

  const navigation = useNavigation();

  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    workout,
    setWorkout,
  } = useContext(FitnessItems);

  return (
    <SafeAreaView>
      <Image style={styles.image} source={{ uri: current.image }} />
      <Text style={styles.title}>{current.name}</Text>
      <Text style={styles.title}>x{current.sets}</Text>

      {index + 1 >= excersise.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.doneBtn}>
          <Text style={styles.btnText}>Done</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed, current.name]);

            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);

            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={styles.doneBtn}>
          <Text style={styles.btnText}>Done</Text>
        </Pressable>
      )}

      <Pressable style={styles.nav}>
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={styles.navBtn}>
          <Text style={styles.navText}>Prev</Text>
        </Pressable>

        {index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.navBtn}>
            <Text style={styles.navText}>Skip</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("Rest");

              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={styles.navBtn}>
            <Text style={styles.navText}>Skip</Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 25,
    fontWeight: "bold",
  },
  doneBtn: {
    backgroundColor: "purple",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    borderRadius: 30,
    padding: 10,
    width: "45%",
    alignItems: "center",
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
    color: "white",
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  navBtn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    width: 80,
  },
  navText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default FitScreen;
