
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import TabNavigator from './components/TabNavigator';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ScreenUSB from './components/USBScreen';
import { SafeAreaView } from 'react-native-safe-area-context';


const Drawer = createDrawerNavigator<RootStackPramList>();

export default function App() {
    // const navigation: NavigationProp<RootStackPramList> = useNavigation();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          // headerShown: false,
          drawerStyle: {
            backgroundColor: '#fff',
            width: 280,
          },
        }}
      >
        <Drawer.Screen name="TabNavigator" component={TabNavigator} options={{headerShown:false}} />
        <Drawer.Screen name="screenusb" component={ScreenUSB} options={{
          title:'Screen 2',
          header: ({navigation}) => (
              <SafeAreaView style={styles.header}>
                <TouchableOpacity style={{marginRight:10}}>
                  <Ionicons name="arrow-back-outline" size={24} color="white" onPress={()=>navigation.goBack()} />
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Dây cáp usb"
                    placeholderTextColor="#666"
                  />
                  <Octicons name="search" size={24} color="black"  style={styles.searchIcon} />
                </View>
                <View style={styles.cartContainer}>
                  <MaterialCommunityIcons name="cart-check" size={24} color="black" />
                  <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>1</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Feather name="more-horizontal" size={24} color="black" />
                </TouchableOpacity>
              </SafeAreaView>
            )
          
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#38BDF8',
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: 10,
    position: 'relative',
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  cartContainer: {
    marginRight: 10,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
})

