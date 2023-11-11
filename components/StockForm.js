import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { db } from "../firebase";


export default function StockForm({ image, qrCodeData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async () => {
    // Save the image to Firebase Storage
    if (image) {
      setUploading(true);

      try {
        const storageRef = ref(storage, `Material-In-Stock/${image}`);
        const response = await fetch(image);
        const blob = await response.blob();
        await uploadBytes(storageRef, blob);
        const imageUrl = await getDownloadURL(storageRef);

        // Save the image URI and form data to Firestore
        await addDoc(collection(db, "Material-In-Stock"), {
          uri: imageUrl,
          name,
          email,
          qrCodeData,
        });

      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setUploading(false);
      }
    }

    // Reset
    setName("");
    setEmail("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      {uploading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      
      {/* Render the ImagePickerComponent and QRCodeScanComponent here */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
