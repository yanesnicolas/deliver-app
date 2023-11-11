import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import MultiSelect from "react-native-multiple-select";
import {Picker} from '@react-native-picker/picker';
import { StyleSheet } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import Signatures from "../Signatures";
import { INFO, Laptop } from "../../Info";
import datas from "../../datas";
import Description from "../Description";

export default function CellItemScreen() {
  const [selectedValue, setSelectedValue] = useState("");
  const [multiSelectedItems, setMultiSelectedItems] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("");
  const [selected, setSelected] = useState("");

  const items = [
    {
        "id": 1,
        "name": "Galaxy S21",
        "brand": "Samsung",
        "series": "S"
      },
      {
        "id": 2,
        "name": "Galaxy A52",
        "brand": "Samsung",
        "series": "A"
      },
      {
        "id": 3,
        "name": "Galaxy S20 FE",
        "brand": "Samsung",
        "series": "S"
      },
      {
        "id": 4,
        "name": "Galaxy A72",
        "brand": "Samsung",
        "series": "A"
      },
      {
        "id": 5,
        "name": "Galaxy S10",
        "brand": "Samsung",
        "series": "S"
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
      <Text style={styles.label}>Nome do trabalhador:</Text>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
    <Text></Text>
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
          <Picker.Item label="Terminal de Contentores" value="Terminal de Contentores" />
          <Picker.Item label="Terminal de Carga Geral" value="Terminal de Carga Geral" />
        </Picker>
      </TouchableOpacity>
      <Text style={styles.label}>Codigo do Trabalhador:</Text>
  <TextInput
    style={styles.textInput}
    onChangeText={text => console.log(text)}
    placeholder="Codigo do Trabalhador..."
  />
  <Text></Text>
  <Text style={styles.label}>Funcao do Trabalhador:</Text>
  <TextInput
    style={styles.textInput}
    onChangeText={text => console.log(text)}
    placeholder="Funcao do Trabalhador..."
  />
  <Text></Text>
      <Text style={styles.label}>Equipamento por entregar:</Text>
      <MultiSelect
        items={items}
        uniqueKey="id"
        onSelectedItemsChange={handleMultiSelect}
        selectedItems={multiSelectedItems}
        selectText="Pick Items"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={(text) => console.log(text)}
        altFontFamily="Bierstadt-Regular"
        tagRemoveIconColor="#2e2e73"
        tagBorderColor="#2e2e73"
        tagTextColor="#2e2e73"
        selectedItemTextColor="#2e2e73"
        selectedItemIconColor="#2e2e73"
        itemTextColor="#2e2e73"
        displayKey="name"
        searchInputStyle={{ color: '#2e2e73' }}
        submitButtonColor="#2e2e73"
        submitButtonText="Submit"
        style={{ marginBottom: 20 }}
      />
      <Text></Text>
      <Text style={styles.label}>Condicoes:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={styles.selectBox}
      >
        <Picker.Item label="Select an condition" value="" />
        <Picker.Item label="Novo" value="item1" />
        <Picker.Item label="Usado" value="item2" />
        </Picker>
        <Text></Text>
        <Description datas={datas.DescriptionCellphone} />
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
  <Text></Text>
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
      borderRadius: 10,
      marginBottom: 8,
      color: '#2e2f72'
    
    },
    selectBox: {
    height: 40,
    borderColor: '#2e2e73',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
    },
    dropdown: {
    height: 40,
    borderColor: '#2e2e73',
    borderWidth: 1,
    marginBottom: 20,
    position: 'relative',
    borderRadius: 10,
    },
    dropdownText: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    color: '#000',
    borderRadius: 10,
    },
    textInput: {
    height: 40,
    borderColor: '#2e2e73',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
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