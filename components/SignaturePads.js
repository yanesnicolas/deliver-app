import React, { useState } from "react";
import { StyleSheet, View, Image, StatusBar, Button } from "react-native";
import Signature from "react-native-signature-canvas";

const App = () => {
    const [signature, setSign] = useState(null);
    const [showSignature, setShowSignature] = useState(false);

    const handleOK = (signature) => {
        console.log(signature);
        setSign(signature);
        setShowSignature(false);
    };

    const handleEmpty = () => {
        console.log("Empty");
    };

    const handleButtonClick = () => {
        setShowSignature(true);
    };

    const style = `.m-signature-pad--footer
    .button {
      background-color: blue;
      color: #FFF;
    }`;

    return (
        <View style={styles.container}>
            {showSignature ? (
                <Signature
                    onOK={handleOK}
                    onEmpty={handleEmpty}
                    descriptionText="Sign"
                    clearText="Clear"
                    confirmText="Save"
                    webStyle={style}
                    autoClear={true}
                />
            ) : (
                <>
                    <View style={styles.preview}>
                        {signature ? (
                            <Image
                                resizeMode={"contain"}
                                style={styles.image}
                                source={{ uri: signature }}
                            />
                        ) : null}
                    </View>
                    <Button title="Open Signature Pad" onPress={handleButtonClick} />
                </>
            )}
            <StatusBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    preview: {
        backgroundColor: "#c6c3c3",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 20,
    },
    image: {
        width: 335,
        height: 200,
    },
});
