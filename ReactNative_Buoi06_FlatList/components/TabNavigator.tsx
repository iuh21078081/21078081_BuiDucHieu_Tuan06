
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeStack from "./HomeStack";
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import ScreenChat from "./ScreenChat";
import ScreenUSB from "./USBScreen";
import {useNavigation, NavigationProp, DrawerActions } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator<RootStackPramList>();

function TabNavigator() {
     const navigation: NavigationProp<RootStackPramList> = useNavigation();

    return (
      <Tab.Navigator
        screenOptions={{
          // headerShown: false,
          tabBarStyle: {
            backgroundColor: '#2196F3',
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#ccc',
        }}
      >
        <Tab.Screen 
          name="HomeStack" 
          component={HomeStack}
          options={{
            headerShown:false,
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <TouchableOpacity >
                    <Ionicons name="menu-outline" size={24} color="black" />
                </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen  
            name="screenusb"
            component={ScreenUSB}
            options={{
            headerShown:false,
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <Octicons name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="screenchat" 
          component={ScreenUSB}
          options={{
            headerShown:false,
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <AntDesign name="back" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  
  export default TabNavigator;