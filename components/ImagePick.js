import { StyleSheet, View, Image, Button } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ImagePick({ onImageSelected }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
      onImageSelected(result.uri); // Pass the image URI to the parent component
    }
  };

  return (
    <View style={styles.container}>
    <Button title="Pick an image" onPress={pickImage} />
    {image && <Image source={{ uri: image }} style={styles.image} />}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  }
});
