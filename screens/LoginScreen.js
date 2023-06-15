import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const LoginScreen = () => {
  const navigation = useNavigation();
  const [loading,setLoading]= useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    setLoading(true);
    const unsubscribe =auth.onAuthStateChanged((authUser)=>{
      if(!authUser){
        setLoading(false);
      }
      if(authUser){
        navigation.replace("Home")
      }
    });
    return unsubscribe;
  },[])

  const login = ()=> {
    signInWithEmailAndPassword(auth,email,password).then((userCredentials)=> {
      console.log("user credential",userCredentials);
      const user = userCredentials.user;
      console.log("user details", user);
    })
  }


  return (
    <SafeAreaView style={styles.container}>

    {loading ? (
      <View>
        <Text>loading</Text>
      </View>
    ):(
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#662d91" }}>
            Sign In
          </Text>

          <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
            Sign In to your account
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
          <Pressable
          onPress={login}
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
              Login{" "}
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 17,
                color: "grey",
                fontWeight: 500,
              }}
            >
              Dont have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    )}


    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
  },
});
