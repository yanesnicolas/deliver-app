import { StyleSheet, Text, View, useWindowDimensions, Image } from "react-native";
import React from "react";

const cover = require("../assets/coffee-cover.jpg");
const dimensions = {
  with: 900,
  height: 450,
};

const ratio = dimensions.height / dimensions.with;
export default function FlatHeader() {
  const window = useWindowDimensions();
  const width = window.width;
  const height = width * ratio;
  return (
    <>
      <Image style={{ width, height }} source={cover} />
      <View style={styles.container}>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4e8edb",
    paddingVertical: 8,
    marginBottom: 16,
  },

  title: {
    alignSelf: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFF",
  },
});
