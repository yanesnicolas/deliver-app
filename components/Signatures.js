import React, { useState } from "react";
import {StyleSheet, View, Image, StatusBar, Button, Modal, Text,} from "react-native";
import Signature from "react-native-signature-canvas";
import { Swipeable } from "react-native-gesture-handler";

const Signatures = ({ onSignatureChange }) => {
  const [signature, setSign] = useState(null);
  const [showSignature, setShowSignature] = useState(false);
  const closeSwipeable = () => setShowSignature(false);
  const handleOK = (signature) => {
    setSign(signature);
    setShowSignature(false);
    onSignatureChange(signature);
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const handleButtonClick = () => {
    setShowSignature(true);
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: #2e2e73;
      color: #FFF;
      border-radius: 50px;
    }`;

  return (
    <View style={styles.container}>
      <Swipeable
        onSwipeComplete={closeSwipeable}
        containerStyle={styles.swipeableContainer}
        renderLeftActions={() => null}
        renderRightActions={() => null}
      >
        <Modal animationType="slide" visible={showSignature} transparent={true}>
          <View style={styles.modal}>
            <Signature
              onOK={handleOK}
              onEmpty={handleEmpty}
              descriptionText="Sign"
              clearText="Clear"
              confirmText="Save"
              webStyle={style}
              autoClear={true}
            />
            <Button title="Go back" onPress={() => setShowSignature(false)} />
          </View>
        </Modal>
        <View style={styles.preview}>
          {signature ? (
            <Image
              resizeMode={"contain"}
              style={styles.image}
              source={{ uri: signature }}
            />
          ) : null}
        </View>
        <View>
          <View>
            <Text style={styles.buttonContainer} onPress={handleButtonClick}>
              Open Signature Pad
            </Text>
          </View>
        </View>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  buttonContainer: {
    backgroundColor: "#2e2f72",
    borderRadius: 10,
    padding: 15,
    margin: 5,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:"center",
  },
  swipeableContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    height: "60%",
    marginTop: "auto",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  preview: {
    backgroundColor: "#fff",
    borderColor:"#2e2f72",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 30,
    borderRadius: 15,
  },
  image: {
    width: 335,
    height: 150,
  },
  button: {
    borderRadius: 50,
  },
});

export default Signatures;
