import { StyleSheet, Text, View,SafeAreaView, Platform } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS === "android" ? 35:0,
    }
})