import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import * as Location from "expo-location";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Services from "../components/Services";


const HomeScreen = () => {
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "We are loading your location"
  );
  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);

  useEffect(() => {
    chechIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const chechIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services is not enabled",
        "Please enable Location service",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Allow app to use location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();
    // console.log(coords)

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      // console.log(response)

      for (let item of response) {
        let address = `${item.region} , ${item.city} , ${item.postalCode}`;
        setdisplayCurrentAddress(address);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* {this is for location and profile} */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="ios-location-sharp" size={24} color="#fd5c63" />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
          <Text>{displayCurrentAddress} </Text>
        </View>
        <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
          <Image
            style={{ height: 40, width: 40, borderRadius: 20 }}
            source={{
              uri: "https://lh3.googleusercontent.com/ogw/AOLn63HFmxkZ6bzl4LpTvxLPurTyH-r6kFYlOaaOBgZAcA=s64-c-mo",
            }}
          />
        </Pressable>
      </View>

      {/* this is for  searchbar  */}
      <View
        style={{
          margin: 10,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth:0.8,
          borderColor:"#C0C0C0",
          borderRadius:7,
        }}
      >
        <TextInput placeholder="Search for items" />
        <Feather name="search" size={24} color="#fd5c63" />
      </View>


      {/* Image Crousel */}
        <Carousel/>

        {/* Services list */}
        <Services/>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0, 
    flex:1,
    backgroundColor:"#F0F0F0",
  },
});
