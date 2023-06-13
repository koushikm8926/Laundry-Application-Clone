import { StyleSheet, Text, View,SafeAreaView, KeyboardAvoidingView ,TextInput, Pressable} from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone]= useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
     <KeyboardAvoidingView>
     <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#662d91" }}>
            Register
          </Text>

          <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
           Create a new account 
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="email" size={24} color="black" />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              placeholderTextColor="black"
              style={{
                fontSize: email ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "grey",
                width: 300,
                marginVertical: 10,
                marginLeft: 10,
              }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5 name="key" size={24} color="black" />
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              placeholderTextColor="black"
              style={{
                fontSize: password ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "grey",
                width: 300,
                marginVertical: 20,
                marginLeft: 10,
              }}
            />
          </View>
          
      
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="phone-portrait" size={24} color="black" />
            <TextInput
             value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Phone number"
              placeholderTextColor="black"
              style={{
               fontSize:phone?18:18,
                borderBottomWidth: 1,
                borderBottomColor: "grey",
                width: 300,
                marginVertical: 10,
                marginLeft: 10,
              }}
            />
          </View>
          <Pressable
            style={{
              width: 200,
              backgroundColor: "#318CE7",
              marginLeft: "auto",
              borderRadius: 7,
              marginRight: "auto",
              marginVertical: 40,
              padding: 15,
            }}
          >
            <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
             Register{" "}
            </Text>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate("Login")} >
            <Text
              style={{
                textAlign: "center",
                fontSize: 17,
                color: "grey",
                fontWeight: 500,
              }}
            >
              Already have an account? Sign in
            </Text>
          </Pressable>

        </View>


     </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
  },
})