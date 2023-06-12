import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const PickUpScreen = () => {

  const navigation= useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [delivery, setDelivery] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);

  const proceedToCart= ()=>{
    if (!selectedDate ||!selectedTime || !delivery){
      Alert.alert(
        "Invalid",
        "Please select all the fields",
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
    }
    if(selectedDate && selectedTime && delivery){
      navigation.replace("Cart",{
        Time:selectedTime,
      })
    }
  }
  const deliveryTime = [
    {
      id: "0",
      name: "2-3 Days",
    },
    {
      id: "1",
      name: "3-4 Days",
    },

    {
      id: "2",
      name: "4-5 Days",
    },

    {
      id: "3",
      name: "5-6 Days",
    },

    {
      id: "4",
      name: "Tommorrow",
    },
  ];

  const times = [
    {
      id: "1",
      time: "11 PM",
    },
    {
      id: "2",
      time: "12 PM",
    },
    {
      id: "3",
      time: "1 PM",
    },
    {
      id: "4",
      time: "2 PM",
    },
    {
      id: "5",
      time: "3 PM",
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Enter Your Address
        </Text>
        <TextInput
          style={{
            padding: 40,
            borderColor: "grey",
            borderWidth: 0.7,
            margin: 10,
            borderRadius: 10,
            paddingVertical: 80,
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Pick Up Date
        </Text>
        <HorizontalDatepicker
        
          mode="gregorian"
          startDate={new Date("2023-06-01")}
          endDate={new Date("2023-06-31")}
          initialSelectedDate={new Date("2020-08-22")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Select Time
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "grey",
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Delivery Date
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, i) => (
            <Pressable
              key={i}
              onPress={() => setDelivery(item.name)}
              style={
                delivery.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "grey",
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </SafeAreaView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            padding: 10,
            marginTop:"auto",
            marginBottom: 10,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{fontSize:17, fontWeight:'600',color:"white"}}>{cart.length} items | $ {total}</Text>
            <Text style={{fontSize:15, fontWeight:'400',color:'white',marginVertical:6,}}>Extra charges may apply</Text>
          </View>
          <Pressable onPress={proceedToCart}>
            <Text style={{fontSize:17, fontWeight:'600', color:'white'}}>Proced to cart</Text>
          </Pressable>
        </Pressable>
      )}




    </>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});
