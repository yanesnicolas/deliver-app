import React from "react";
import { StyleSheet, Dimensions, Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from 'react-redux';

const screenWidth = Dimensions.get('window').width;
const Width = screenWidth * 0.4; // 80% of screen width
export default function HomeScreen({ navigation }) {
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress("Delivery Forms")}>
          <LinearGradient
            colors={["#0000ff", "#add8e6"]}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.buttonText}>Delivery</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Material In Stock")}>
          <LinearGradient
            colors={["#007fff", "#00ccff"]}
            style={styles.button}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.buttonText}>Stock</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Devolution Form")}>
          <LinearGradient
            colors={["#3f00ff", "#446ccf"]}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.buttonText}>Devolution</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress("Sim Card")}>
          <LinearGradient
            colors={["#0000ff", "#1dacd6"]}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.buttonText}>SIM Card</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Cellphone")}>
          <LinearGradient
            colors={["#0000cd", "#2196F3"]}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.buttonText}>Smartphone</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Sim And Cellphone")}>
          <LinearGradient
            colors={["#3F51B5", "#00bfff"]}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.buttonText}>Smartphone and SIM Card</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonContainer: {
    width: "33%",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    height: 200,
    width: Width,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "blue",
    shadowColor: "black",
    shadowOpacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  gradient: {
    flex: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
