import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
            import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, Image } from 'react-native'



const Profile = (props) => {

            
                
                
                return (
                    
                    
    <SafeAreaView  style={styles.AndroidSafeArea}>
    <View style = {{backgroundColor: '#34B7F1', width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingHorizontal: 10, shadowColor: "black", shadowOffset: {height: 5 }, shadowRadius: 10, shadowOpacity: 0.5, elevation: 10, overflow: 'hidden', marginBottom: 10}}>
      <Text style={{color: 'white', fontSize: 26, fontWeight: 'bold',}}>Profile</Text>
      </View>        
                <TouchableOpacity style = {{width: '90%', height: 35, backgroundColor: '#24ECD5', alignItems: 'center', justifyContent: 'center', marginLeft: '5%', borderRadius: 18, marginTop: 10}}>
                <Text style = {{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Submit</Text>
            </TouchableOpacity>        
                <TouchableOpacity style = {{width: '90%', height: 35, backgroundColor: '#24ECD5', alignItems: 'center', justifyContent: 'center', marginLeft: '5%', borderRadius: 18, marginTop: 10}}>
                <Text style = {{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Submit</Text>
            </TouchableOpacity>        
                <View style = {{marginVertical: 5, marginLeft: '1%', height: 200, width: '98%', backgroundColor: '#ffb6c1', borderRadius: 20, shadowColor: '#000000', shadowOffset: {
                    width: 1, height:1 }, shadowOpacity: 0.5, elevation: 10}}>
                      <Image style = {{height: 130, width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20, opacity: 0.9}} source = {{uri: 'https://thumbs.dreamstime.com/b/luxury-table-settings-fine-dining-glassware-beautiful-blurred-background-events-weddings-preparation-holiday-passover-139822358.jpg'}} />
                      <View style = {{marginHorizontal: 10, marginVertical: 5}}>
                      
                      <Text style = {{fontSize: 22, fontWeight: 'bold', fontVariant: ['small-caps']}}>Golden Dragon</Text>
                      <Text style = {{fontSize: 16, fontWeight: '400', fontStyle: 'italic'}} >Chinese, Continental</Text>
                    </View>
                      </View></SafeAreaView >
                    )
    }
    const styles = StyleSheet.create({
      AndroidSafeArea: {
        // flex: 1,
        height: '100%',
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    });
    
    export default Profile