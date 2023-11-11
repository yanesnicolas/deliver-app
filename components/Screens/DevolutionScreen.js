import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import Signatures from "../Signatures";
import { SelectList } from "react-native-dropdown-select-list";
import { Ict, Trabalhador, Department } from "../../Info";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import Description from "../Description";
import datas from "../../datas";
import { useNavigation } from "@react-navigation/native";

export default function DevolutionScreen({ route, isVisible, onClose }) {
  const { item } = route.params;
  const navigation = useNavigation();
  const [showPicker, setShowPicker] = useState(false);
  const [deliveryBy, setDeliveryBy] = useState("");
  const [receivedBy, setReceivedBy] = useState("");
  const [documentData, setDocumentData] = useState(null);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [conditions, setConditions] = useState("");
  const [comments, setComments] = useState("");
  const [department, setDepartment] = useState("");

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

  const deliveryByChange = async (value) => {
    setDeliveryBy(value);
    try {
      const docRef = doc(db, "Delivered-Material", item.id);
      await updateDoc(docRef, {
        returnedBy: value,
      });
    } catch (error) {
      console.log("Error updating document:", error);
    }
  };

  const receivedByChange = async (value) => {
    setReceivedBy(value);
    try {
      const docRef = doc(db, "Delivered-Material", item.id);
      await updateDoc(docRef, {
        confirmedBy: value,
      });
    } catch (error) {
      console.log("Error updating document:", error);
    }
  };
  const handleSignatureChange1 = async (uri) => {
    // Update Firestore or other data source with signature URI
    try {
      const signatureRef = doc(db, "Delivered-Material", item.id);
      await updateDoc(signatureRef, { receivedBySignature: uri });
      console.log("Signature data stored successfully.");
    } catch (error) {
      console.error("Error storing signature data:", error);
    }
  };
  const handleSignatureChange = async (uri1) => {
    // Update Firestore or other data source with signature URI
    try {
      const signatureRef = doc(db, "Delivered-Material", item.id);
      await updateDoc(signatureRef, { returnedBySignature: uri1 });
      console.log("Signature data stored successfully.");
    } catch (error) {
      console.error("Error storing signature data:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const documentRef = doc(firestore, "your_collection", item.id);
      await updateDoc(documentRef, { name, description });
      onClose();
    } catch (error) {
      console.log("Error updating Firestore document:", error);
    }
  };

  const moveDoc = async () => {
    try {
      const sourceRef = doc(db, "Delivered-Material", item.id);
      await updateDoc(sourceRef, {
        DevolutionComments: comments,
      });

      const update = await getDoc(sourceRef);

      if (update.exists()) {
        const sourceDocData = update.data();

        const deliveryRef = collection(db, "Returned-Material");
        await setDoc(doc(deliveryRef, item.id), sourceDocData);

        await deleteDoc(sourceRef);

        console.log("Document moved successfully");
      } else {
        console.log("Source document does not exist.");
      }
    } catch (error) {
      console.error("Error moving document", error);
    }
    navigation.goBack();
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
          <Image style={styles.image} source={{ uri: item.uri }} />
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.text}>{item.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.text}>{item.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Recieved By:</Text>
            <Text style={styles.text}>{item.receivedBy}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Department:</Text>
            <Text style={styles.text}>{item.Department}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Delivered on:</Text>
            <Text style={styles.text}>{item.deliveryBy}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Fornecedor:</Text>
            <Text style={styles.text}>{item.fonecedor}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Conditions:</Text>
            <Text style={styles.text}>{item.Conditions}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Comments:</Text>
            <Text style={styles.text}>{item.Comments}</Text>
          </View>
          <Text style={styles.label}>Entregue Por</Text>
          <Image
            style={styles.signatures}
            source={{ uri: item.deliverySignature }}
          />
          <Text style={styles.label}>Recebido Por</Text>
          <Image
            style={styles.signatures}
            source={{ uri: item.receivedSignature }}
          />
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}>
              {showPicker ? "Hide form" : "Show Form"}
            </Text>
          </TouchableOpacity>

          {showPicker && (
            <View style={styles.deliveryContainer}>
              <Description text={datas.delivery} />
              <Text style={styles.label}>Comments:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setComments(text)}
                placeholder="Type here..."
                value={comments}
              />
              <Text style={styles.label}>Devolvido por:</Text>
              <View style={styles.pickerContainer}>
                <SelectList
                  setSelected={deliveryByChange}
                  data={Trabalhador}
                  save="value"
                />
              </View>
              <Signatures onSignatureChange={handleSignatureChange} />
              <Text style={styles.label}>Recebido por:</Text>
              <View style={styles.pickerContainer}>
                <SelectList
                  setSelected={receivedByChange}
                  data={Ict}
                  save="value"
                  label="Categories"
                />
              </View>
              <Signatures onSignatureChange={handleSignatureChange1} />
              <TouchableOpacity style={styles.button} onPress={moveDoc}>
                <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}>Save</Text>
              </TouchableOpacity>
            </View>
          )}
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
  },
  signatures: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    marginBottom: 4,
  },

  text: {
    fontSize: 16,
    marginBottom: 4,
    
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#5dadf7",
    borderRadius: 6,
    alignItems: "center",
  },
  pickerContainer: {
    marginTop: 10,
    width: 200,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  deliveryContainer: {
    marginTop: 20,
    width: 200,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#2e2f72",
  },
  dropdown: {
    height: 40,
    borderColor: "#2e2e73",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    position: "relative",
    borderRadius: 10,
    backgroundColor: "white",
  },
  dropdownText: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    color: "#2e2e73",
  },
  textInput: {
    height: 40,
    borderColor: "#2e2e73",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
};
