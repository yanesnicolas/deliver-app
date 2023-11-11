import React, { useState } from "react";
import { StyleSheet, Dimensions, View, Text, TextInput, TouchableOpacity, FlatList, Image, } from "react-native";
import FlatHeader from "./FlatHeader";
import DATA from "../data";
import Item from "./Item";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get('window').width;
const Width = screenWidth * 0.8;

const CellphoneAndSim = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(DATA);
  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = DATA.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const handleAddItemPress = () => {
    navigation.navigate("SimAndCellphoneScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => handleSearch(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddItemPress}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      {/* Flastlist */}
      <View style={styles.searchAndPlus}></View>
      <View style={{ Width }}>
      <FlatList
        data={filteredData}
        ListHeaderComponent={FlatHeader}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { item })}
          >
            <Item
              name={item.name}
              description={item.description}
              serial_number={item.serial_number}
              recipient_name={item.recipient_name}
              image={item.image}
            />
          </TouchableOpacity>
        )}
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
  backgroundColor:'white',
  
},

searchBarContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor:'white',
  marginBottom: 10,
  justifyContent: "center",
},

searchBarInput: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  padding: 5,
  marginRight: 5
},

addButton: {
  backgroundColor: '#2e2e73',
  borderRadius: 5,
  padding: 5,
  height: 40,
  width: 40, 
  alignItems: 'center',
  justifyContent: 'center'

},

addButtonText: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold'
},

itemContainer: {
  padding: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  marginBottom: 10
},

itemTitle: {
  fontWeight: 'bold',
  marginBottom: 5
},

itemDescription: {
  color: '#666'

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
  backgroundColor:'white',
  color:'#2e2e73',
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

export default CellphoneAndSim;
