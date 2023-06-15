import { StyleSheet, Text, View,SafeAreaView, Platform, Pressable } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

    const user = auth.currentUser; 
    const navigation = useNavigation();
    const signOutUser = ()=>{
        signOut(auth).then(()=>{
            navigation.replace("Login")
        })
        .catch(err=>{
            console.log(err);
        })
    }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={{marginVertical:10,}}>
        <Text>wellcome {user.email}  </Text>
      </Pressable>

      <Pressable onPress={signOutUser}>
        <Text>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS === "android" ? 35:0,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    }
})