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
import { INFO, Laptop,Trabalhador } from "../../Info";
import datas from "../../datas";

export default function AddItemScreen() {
  const [selectedValue, setSelectedValue] = useState("");
  const [multiSelectedItems, setMultiSelectedItems] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("");
  const [selected, setSelected] = useState("");
  const [department, setDepartment] = useState("");

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

  const handleMultiSelect = (items) => {
    setMultiSelectedItems(items);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.label}>Nome do Trabalhador:</Text>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={INFO} 
        save="value"
    />
    <Text></Text>
    <Text style={styles.label}>Departamento:</Text>
    <TouchableOpacity style={styles.dropdown} onPress={() => {}}>
      <Text style={styles.dropdownText}>{department}</Text>
      <Picker
        selectedValue={department}
        onValueChange={(department) => setDepartment(department)}
        style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0, opacity: 0, borderColor: '#4e8edb', borderWidth: 2, borderRadius: 10, }}
      >
        <Picker.Item label="Select an Departamento" value="" />
        <Picker.Item label="ICT" value="ICT" />
        <Picker.Item label="Administracao" value="Administracao" />
        <Picker.Item label="Contabilidade" value="Contabilidade" />
        <Picker.Item label="Procurement" value="Procurement" />
      </Picker>
    </TouchableOpacity>
    <Text style={styles.label}>Equipamento por Entregar:</Text>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={Laptop} 
        save="value"
    />
    <Text></Text>
    <Text style={styles.label}>Condicoes:</Text>
    <TouchableOpacity style={styles.dropdown} onPress={() => {}}>
      <Text style={styles.dropdownText}>{dropdownValue}</Text>
      <Picker
        selectedValue={dropdownValue}
        onValueChange={(itemValue) => setDropdownValue(itemValue)}
        style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0, opacity: 0, borderColor: '#4e8edb', borderWidth: 2, borderRadius: 10, }}
      >
        <Picker.Item label="Select a Condition" value="" />
        <Picker.Item label="New" value="New" />
        <Picker.Item label="Usado" value="Usado" />
        <Picker.Item label="Em Boas Condicoes" value="Em Boas Condicoes" />
      </Picker>
    </TouchableOpacity>
    <Description text={datas.delivery} />
  
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
    paddingHorizontal: 8,
    
    },
    dropdown: {
    height: 40,
    borderColor: '#2e2e73',
    borderWidth: 2,
    borderRadius: 10,
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
    color: "#2e2e73",
    
    },
    textInput: {
    height: 40,
    borderColor: '#2e2e73',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    },
    signatureContainer: {
      marginBottom: 20,
      borderRadius: 10,
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