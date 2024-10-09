
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ScreenChat from './ScreenChat';
const Stack = createNativeStackNavigator<RootStackPramList>();

function HomeStack() {
    // const navigation: NavigationProp<RootStackPramList> = useNavigation();
    return (
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
            headerShown:false
        })}
      >
        <Stack.Screen name="screenchat" component={ScreenChat} options={{headerShown:false}} />
        {/* <Stack.Screen name="screenusb" component={ScreenUSB} options={{headerShown:false}}/> */}
      </Stack.Navigator>
    );
  }

  export default HomeStack;