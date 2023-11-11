import { StyleSheet, Text, View, Image, Animated, TouchableOpacity } from "react-native";
import React from "react";
import { Swipeable } from "react-native-gesture-handler";
import { Icon } from 'react-native-elements';


export default function ItemCard({
  name,
  department,
  contract_number,
  contract_type,
  uri,
  onPress,
  item,
  onDelete,
  timestamp
}) {
  const handleDelete = () => {
    onDelete(item.id);
  };
  
  const leftSwipe = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-120, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    return (
      <View style={styles.editBox}>
        <Animated.Text style={{padding: 4, transform: [{scale: trans}]}}><Icon name="edit" type="ant-design" size={30} color="#2f2f33" /></Animated.Text>
      </View>
    )
  }

  const rightSwipe = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 120],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });
    return (
      <TouchableOpacity onPress={handleDelete}>
      <View style={styles.deleteBox}>
        <Animated.Text style={{padding: 4, transform: [{scale: trans}]}}><Icon name="delete" type="ant-design" size={30} color="#2f2f33" /></Animated.Text>
      </View>
      </TouchableOpacity>
    )
  }
  return (
    <Swipeable renderLeftActions={leftSwipe} renderRightActions={rightSwipe}>
      <View style={styles.item}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{ width: 120, height: 100, borderRadius: 4 }}
          source={{uri}}
          resizeMode="contain"
        />
        </TouchableOpacity>
        <View style={{ height: 100, marginLeft: 4 }}>
          <Text style={styles.title} numberOfLines={1}>
            {name.substring(0, 25)}
            {name.length > 25 ? "..." : ""}
          </Text>
          <Text>
            <Text style={styles.name}>Number: </Text>
            {contract_number}
          </Text>
          <Text>
            <Text style={styles.name}>Department: </Text>
            <Text numberOfLines={1}>
            {department.substring(0, 30)}
            {department.length > 30 ? "..." : ""}
          </Text>
          </Text>
          <Text>
            <Text style={styles.name}>Type: </Text>
            {contract_type}
          </Text>
          <Text>
            <Text style={styles.name}>Date: </Text>
            {timestamp}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 6,
    height: 120,
  },
  name: {
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    color: "#2e2e73",
    marginBottom: 1,
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: "center",
    borderRadius: 4
  },
  editBox: {
    backgroundColor: '#72a1ff',
    justifyContent: "center",
    borderRadius: 4
  }
});
