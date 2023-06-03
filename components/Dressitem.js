import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Dressitem = ({ item }) => {
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: "#F8F8F8",
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: item.image }}
          />
        </View>

        <View>
          <Text style={{width:83,fontSize:17,fontWeight:'bold',marginBottom:7,}}>{item.name}</Text>
          <Text style={{width:60, color:"grey", fontSize:15,}}>$ {item.price}</Text>
        </View>

        <Pressable style={{ width: 80 }}>
          <Text
            style={{
              borderColor: "grey",
              borderWidth: 0.8,
              marginVertical: 10,
              textAlign: "center",
              padding: 5,
              color: "#088F8F",
              fontSize:17,
              fontWeight:'bold',
              borderRadius: 6,
            }}
          >
            Add
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default Dressitem;

const styles = StyleSheet.create({});
