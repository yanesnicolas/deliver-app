import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import Signatures from "../Signatures";
import Description from "../Description";

export default function SimAndCellphoneScreen() {
  const [selectedValue, setSelectedValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Jose Comissario" },
    { key: "3", value: "Jonas Alfixa" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Fernando Vasco" },
    { key: "6", value: "Yanick Marques" },
    { key: "7", value: "Pedro jose" },
  ];


  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Numero a ser Atribuido:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
          placeholder="Type here..."
        />
        <Text style={styles.label}>Contract Type:</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={styles.selectBox}
        >
          <Picker.Item label="Select an condition" value="" />
          <Picker.Item label="Diamante" value="item1" />
          <Picker.Item label="Movinet 1K" value="item2" />
          <Picker.Item label="Movinet 2K" value="item3" />
        </Picker>
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
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              opacity: 0,
              borderColor: "#4e8edb",
              borderWidth: 2,
              borderRadius: 10,
            }}
          >
            <Picker.Item label="Select an Departamento" value="" />
            <Picker.Item label="ICT" value="ICT" />
            <Picker.Item label="Administracao" value="Administracao" />
            <Picker.Item label="Contabilidade" value="Contabilidade" />
            <Picker.Item label="Procurement" value="Procurement" />
          </Picker>
        </TouchableOpacity>
        <Description />
        <Text style={styles.label}>Comments:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
          placeholder="Type here..."
        />
        <Text>Entregue por:</Text>
        <Signatures />
        <Text>Recebido por:</Text>
        <Signatures />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    borderRadius: 10,
    marginBottom: 8,
    color: "#2e2f72",
  },
  selectBox: {
    height: 40,
    borderColor: "#2e2e73",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  dropdown: {
    height: 40,
    borderColor: "#2e2e73",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    position: "relative",
    borderRadius: 10,
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
  signatureContainer: {
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  signatureCanvas: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderColor: "black",
  },
  signatureImage: {
    width: 300,
    height: 200,
    marginTop: 10,
  },
});
