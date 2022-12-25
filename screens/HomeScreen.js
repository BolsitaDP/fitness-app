import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);

  return (
    <ScrollView>
      <View style={styles.banner}>
        <Text style={styles.title}>Home Workout</Text>

        <View style={styles.stats}>
          <View>
            <Text style={styles.statNum}>{workout}</Text>
            <Text style={styles.statText}>Workouts</Text>
          </View>
          <View>
            <Text style={styles.statNum}>{calories}</Text>
            <Text style={styles.statText}>Calories</Text>
          </View>
          <View>
            <Text style={styles.statNum}>{minutes}</Text>
            <Text style={styles.statText}>Minutes</Text>
          </View>
        </View>

        <View style={styles.image01Container}>
          <Image
            style={styles.image01}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-fV-TSleaAOKPShQQYSJh38kdFm8MKOVJo9dsccnZaGDWKNqwW6LI-yYiJvFJEXWnS0&usqp=CAU",
            }}
          />
        </View>

        <FitnessCards />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#1b1b1b",
    padding: 10,
    // height: 200,
    width: "100%",
    alignItems: "center",
  },
  title: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 15,
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  statNum: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  statText: {
    color: "#eeeeee",
    fontSize: 18,
    marginTop: 2,
  },
  image01Container: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
  },
  image01: {
    width: 80,
    height: 80,
    marginTop: 20,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#1b1b1b",
    resizeMode: "center",
  },
});

export default HomeScreen;
