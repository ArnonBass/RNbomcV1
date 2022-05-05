import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const Report = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:24}}>Report Screen</Text>
    </SafeAreaView>
  )
}

export default Report

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'lightblue'
    }
})