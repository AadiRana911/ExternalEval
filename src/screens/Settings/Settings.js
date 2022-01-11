import React from 'react'
            import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, Image } from 'react-native'



const Settings = () => {

            return (
                
    <SafeAreaView  style={styles.AndroidSafeArea}>
    <View style = {{backgroundColor: '#34B7F1', width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingHorizontal: 10, shadowColor: "black", shadowOffset: {height: 5 }, shadowRadius: 10, shadowOpacity: 0.5, elevation: 10, overflow: 'hidden', marginBottom: 10}}>
      <Text style={{color: 'white', fontSize: 26, fontWeight: 'bold',}}>Settings</Text>
      </View></SafeAreaView >
                )
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

export default Settings