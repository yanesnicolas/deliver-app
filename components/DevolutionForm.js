import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import FlatHeader from "./FlatHeader";
import DATA from "../data";
import Item from "./Item";
import { SafeAreaView } from "react-native-safe-area-context";
import { FloatingAction } from "react-native-floating-action";
import Icon from "react-native-vector-icons/Ionicons";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const screenWidth = Dimensions.get("window").width;
const Width = screenWidth * 0.8; // 80% of screen width

const DevolutionForm = ({ navigation }) => {
  const [dataList, setDataList] = useState([]);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "Returned-Material"),
      (snapshot) => {
        const newDataList = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        setDataList(newDataList);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const filteredDataList = dataList.filter(
    (item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.email.toLowerCase().includes(filterText.toLowerCase()) ||
      item.qrCodeData.toLowerCase().includes(filterText.toLowerCase())
  );

  const deleteItem = async (itemId) => {
    try {
      await deleteDoc(doc(db, 'Material-In-Stock', itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  
  const handleActionButtonPress = (actionName) => {
    switch (actionName) {
      case "bt_qrcode":
        navigation.navigate("Photo QrCode Screen");
        break;
      case "bt_photo":
        navigation.navigate("Image Pick Screen");
        break;
      default:
        console.log("Unknown action pressed");
    }
  };
  const actions = [
    {
      id: 1,
      text: "QR Code Scanner",
      name: "bt_qrcode",
      icon: <Icon name="qr-code" size={20} color="#fff" />,
      position: 1,
    },
    {
      id: 2,
      text: "Image Pick Screen",
      name: "bt_photo",
      icon: <Icon name="camera" size={27} color="#fff" />,
      position: 2,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ position: "absolute", zIndex: 1, bottom: 20, right: 20 }}>
        <FloatingAction
          actions={actions}
          distanceToEdge={{ vertical: 20, horizontal: 20 }}
          position="right"
          onPressItem={(name) => handleActionButtonPress(name)}
        />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={filterText}
          onChangeText={setFilterText}
        />
      </View>
      {/* Flastlist */}
      <View style={styles.searchAndPlus}></View>
      <View View style={{ Width }}>
        <FlatList
          data={filteredDataList}
          ListHeaderComponent={FlatHeader}
          renderItem={({ item }) => {

            return (
              <Item name={item.name} description={item.email} uri={item.uri} onPress={() => navigation.navigate("Devolution", { item })} item={item} onDelete={() => deleteItem(item.id)} />
            )
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 10,
    justifyContent: "center",
  },

  searchBarInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
  },

  addButton: {
    backgroundColor: "#2e2e73",
    borderRadius: 5,
    padding: 5,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  itemContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  itemTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemDescription: {
    color: "#666",
  },
  searchBar: {
    height: 40,
    borderWidth: 2,
    padding: 10,
    margin: 10,
    flexGrow: 0.9,
    flexShrink: 1,
    flexBasis: 350,
    borderRadius: 10,
    backgroundColor: "white",
    color: "#2e2e73",
  },
  searchAndPlus: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  description: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
});

export default DevolutionForm;
