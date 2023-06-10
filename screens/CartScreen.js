import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>CartScreen</Text>
    </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? 35 : 0,
    }
})