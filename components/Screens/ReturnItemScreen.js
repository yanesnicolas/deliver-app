import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import MultiSelect from "react-native-multiple-select";
import {Picker} from '@react-native-picker/picker';
import { StyleSheet } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import Description from "../Description";
import Signatures from "../Signatures";
import { INFO, Laptop } from "../../Info";

export default function ReturnItemScreen() {
  const [selectedValue, setSelectedValue] = useState("");
  const [multiSelectedItems, setMultiSelectedItems] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("");
  const [selected, setSelected] = useState("");

  const items = [
    {
      id: "1",
      name: "Laptop",
    },
    {
      id: "2",
      name: "Desktop",
    },
    {
      id: "3",
      name: "Monitor",
    },
    {
      id: "4",
      name: "Teclado",
    },
  ];
  const data = [
    {key:'1', value:'Mobiles', disabled:true},
    {key:'2', value:'Jose Comissario'},
    {key:'3', value:'Jonas Alfixa'},
    {key:'4', value:'Computers', disabled:true},
    {key:'5', value:'Fernando Vasco'},
    {key:'6', value:'Yanick Marques'},
    {key:'7', value:'Pedro jose'},
]

  const handleMultiSelect = (items) => {
    setMultiSelectedItems(items);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
    <ScrollView>
      <Text style={styles.label}>Devolvido por:</Text>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
    <Text style={styles.label}>Nome do Receptor:</Text>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />

      <Text style={styles.label}>Departamento:</Text>
      <TouchableOpacity style={styles.dropdown} onPress={() => {}}>
        <Text style={styles.dropdownText}>{dropdownValue}</Text>
        <Picker
          selectedValue={dropdownValue}
          onValueChange={(itemValue) => setDropdownValue(itemValue)}
          style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0, opacity: 0 }}
        >
          <Picker.Item label="Select an Departamento" value="" />
          <Picker.Item label="ICT" value="ICT" />
        </Picker>
      </TouchableOpacity>
      <Text style={styles.label}>Equipamento Devolvido:</Text>
  <TextInput
    style={styles.textInput}
    onChangeText={text => console.log(text)}
    placeholder="Type here..."
  />


      <Text style={styles.label}>Condicao:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={styles.selectBox}
      >
        <Picker.Item label="Select an condition" value="" />
        <Picker.Item label="Usado" value="item1" />
        <Picker.Item label="Danificado" value="item2" />
        <Picker.Item label="Em boas condicoes" value="item3" />
        </Picker>
        <Description/>

  <Text style={styles.label}>Comments:</Text>
  <TextInput
    style={styles.textInput}
    onChangeText={text => console.log(text)}
    placeholder="Type here..."
  />
  <Text></Text>
  <Text>Entregue por:</Text>
  <Signatures/>
  <Text></Text>
  <Text>Recebido por:</Text>
  <Signatures/>
</ScrollView>
</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    },
    label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#4e8edb'
    },
    selectBox: {
    height: 40,
    borderColor: '#4e8edb',
    borderWidth: 1,
    marginVertical: 10,
    },
    dropdown: {
    height: 40,
    borderColor: '#4e8edb',
    borderWidth: 1,
    marginBottom: 20,
    position: 'relative',
    },
    dropdownText: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    color: '#000',
    },
    textInput: {
    height: 40,
    borderColor: '#4e8edb',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    },
    signatureContainer: {
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    signatureCanvas: {
      width: 300,
      height: 200,
      borderWidth: 1,
      borderColor: 'black',
    },
    signatureImage: {
      width: 300,
      height: 200,
      marginTop: 10,
    },
    });