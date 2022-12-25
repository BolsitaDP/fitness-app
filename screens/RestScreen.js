import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RestScreen = () => {
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);

  const navigation = useNavigation();

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTime();

    return () => clearTimeout(timer);
  });

  return (
    <SafeAreaView>
      <Image
        // resizeMode="contain"
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
        style={styles.image}
      />

      <Text style={styles.text}>Take a Break!</Text>

      <Text style={styles.text}>{timeLeft}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  text: {
    fontSize: 30,
    fontWeight: "900",
    marginTop: 50,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default RestScreen;
