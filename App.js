import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/Screens/HomeScreen";
import DeliveryForms from "./components/DeliveryForms";
import MaterialInStock from "./components/MaterialInStock";
import DevolutionForm from "./components/DevolutionForm";
import SimCardTerms from "./components/SimCardTerms";
import CellphoneTerms from "./components/CellphoneTerms";
import AddItemScreen from "./components/Screens/AddItemScreen";
import ReturnItemScreen from "./components/Screens/ReturnItemScreen";
import CellItemScreen from "./components/Screens/CellItemScreen";
import SimItemScreen from "./components/Screens/SimItemScreen";
import CellphoneAndSim from "./components/CellphoneAndSim";
import SimAndCellphoneScreen from "./components/Screens/SimAndCellphoneScreen";
import { Provider } from "react-redux";
import store from "./redux/store";
import PhotoQrCodeScreen from "./components/Screens/PhotoQrCodeScreen";
import DetailsScreen from "./components/Screens/DetailsScreen";
import { decode, encode } from "base-64";
import { Buffer } from "buffer";
import { crypto } from "react-native-get-random-values";
import DevolutionScreen from "./components/Screens/DevolutionScreen";
import DetailsCard from "./components/Screens/DetailsCard";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

if (!global.Buffer) {
  global.Buffer = Buffer;
}

if (!global.crypto) {
  global.crypto = crypto;
}

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Delivery Forms" component={DeliveryForms} />
            <Stack.Screen
              name="Material In Stock"
              component={MaterialInStock}
            />
            <Stack.Screen name="Devolution Form" component={DevolutionForm} />
            <Stack.Screen name="Sim Card" component={SimCardTerms} />
            <Stack.Screen name="Cellphone" component={CellphoneTerms} />
            <Stack.Screen name="Add Item" component={AddItemScreen} />
            <Stack.Screen name="Return Item" component={ReturnItemScreen} />
            <Stack.Screen name="CellItemScreen" component={CellItemScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Details Card" component={DetailsCard} />
            <Stack.Screen name="Devolution" component={DevolutionScreen} />
            <Stack.Screen name="CellphoneAndSim" component={CellphoneAndSim} />
            <Stack.Screen
              name="Sim And Cellphone"
              component={SimAndCellphoneScreen}
            />
            <Stack.Screen name="SimItemScreen" component={SimItemScreen} />
            <Stack.Screen
              name="Photo QrCode Screen"
              component={PhotoQrCodeScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
