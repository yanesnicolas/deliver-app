import {
  View,
  Text,
  Image
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase";


export default function DetailsCard({ route }) {
  const { item } = route.params;

  useEffect(() => {
    fetchDocumentData();
  }, []);

  const fetchDocumentData = async () => {
    try {
      const docRef = doc(db, "Material-In-Stock", item.id);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setDocumentData(data);
        setReceivedBy(data.receivedBy || "");
        setDeliveryBy(data.deliveryBy || "");
      }
    } catch (error) {
      console.log("Error fetching document:", error);
    }
  };

  const handleButtonPress = () => {
    setShowPicker((prevState) => !prevState);
  };

  return (
    <LinearGradient
      colors={["#e5e5e5", "#f4f4f4"]}
      style={styles.button}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: item.receivedSignature }} />
          <View style={styles.row}>
            <Text style={styles.label}>Name: </Text>
            <Text style={styles.text}>{item.receiverName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Number: </Text>
            <Text style={styles.text}>{item.number}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Department: </Text>
            <Text style={styles.text}>{item.department}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Contract Type: </Text>
            <Text style={styles.text}>{item.contractType}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Comments: </Text>
            <Text style={styles.text}>{item.comments}</Text>
          </View>
          <View style={{alignItems: "center", backgroundColor: "white", borderRadius: 5, padding: 10}}>
            <Text style={styles.label}>Delivered By:</Text>
            <Text style={styles.text}>{item.deliveredName}</Text>
            <Image style={{width: 150, height: 120}} src={item.deliveredSignature} />
          </View>
          <View style={{alignItems: "center",padding: 10, backgroundColor: "white", borderRadius: 5, marginTop: 5}}>
            <Text style={styles.label}>Received By:</Text>
            <Text style={styles.text}>{item.receivedName}</Text>
            <Image style={{width: 150, height: 120}} src={item.receivedSignature} />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: "row",
    marginBottom: 4,
  },

  text: {
    fontSize: 16,
    marginBottom: 4,
    
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#2e2f72",
  },
};
