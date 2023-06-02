import { StyleSheet, Text, View,Alert } from 'react-native'
import React, { useState } from 'react'
import * as Location from "expo-location";
import { useEffect } from 'react';


const HomeScreen = () => {
  
  const [displayCurrentAddress,setdisplayCurrentAddress]=useState("We are loading your location");
  const [locationServicesEnabled,setlocationServicesEnabled]=useState(false);
  useEffect(()=>{
    chechIfLocationEnabled();
    getCurrentLocation();

  },[])
  
  const chechIfLocationEnabled = async () => {
    let enabled =  await Location.hasServicesEnabledAsync();
    if (!enabled){
      Alert.alert(
        "Location services is not enabled",
        "Please enable Location service",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }else{
      setlocationServicesEnabled(enabled)
    }
  }
  
  const getCurrentLocation = async ()=>{
    let {status}= await Location.requestForegroundPermissionsAsync();
    if (status !== "granted" ){
      Alert.alert(
        "Permission denied",
        "Allow app to use location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    };

    const {coords}= await Location.getCurrentPositionAsync();
    console.log(coords)
    if(coords){
      const {latitude, longitude} = coords; 
      let response =  await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      console.log(response)
      for (let  item  of  response){
        let address = `${item.name} ${item.city} ${item.postalCode}`
        setdisplayCurrentAddress(address)
      }

    }
    
  }


  return (
    <View style={styles.container}>
      <View>
      <Text>
        {displayCurrentAddress}
      </Text>
      </View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 35 : 0
    }
})