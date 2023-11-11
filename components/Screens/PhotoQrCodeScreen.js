import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ImagePick from '../ImagePick'
import QrCodeScanner from '../QrCodeScanner'
import StockForm from '../StockForm'
import { ScrollView } from 'react-native'

export default function PhotoQrCodeScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [qrCodeData, setQRCodeData] = useState(null);

  const handleImageSelected = (imageUri) => {
    setSelectedImage(imageUri);
  };

  const handleQRCodeData = (data) => {
    setQRCodeData(data);
  };
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
    <View style={styles.container}>
      <ImagePick onImageSelected={handleImageSelected}/>
      <QrCodeScanner onQRCodeData={handleQRCodeData}/>
      <StockForm image={selectedImage} qrCodeData={qrCodeData}/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
});