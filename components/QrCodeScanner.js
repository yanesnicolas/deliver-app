import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button } from "react-native";

const QrCodeScanner = ({ onQRCodeData }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [qrCodeData, setQRCodeData] = useState(null);


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    if (scanned) return;

    const keywords = {
      Model: 'Model',
      SerialNumber: 'Serial Number',
      ProductType: 'Product Type',
      NameOfProduct: 'Name of Product',
    };

    let extractedData = '';

    for (const keyword in keywords) {
      const regex = new RegExp(`(?:^|\\n)${keyword}:\\s?(.*?)(?=\\n|$)`, 'i');
      const match = data.match(regex);
      if (match && match[1]) {
        extractedData += `${keywords[keyword]}: ${match[1]}\n`;
      }
    }

    if (extractedData) {
      setQRCodeData(extractedData);
      onQRCodeData(extractedData); // Pass the QR code data to the parent component
      alert(`Extracted Data:\n\n${extractedData}`);
    } else {
      alert('No relevant data found in the QR code.');
    }

    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



  return (
    <View style={styles.container}>
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={styles.scanner}
    />
    {scanned && <Button title="Scan again" onPress={() => setScanned(false)} />}
    {qrCodeData && <Text style={styles.qrCodeData}>{qrCodeData}</Text>}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanner: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  qrCodeData: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default QrCodeScanner;
