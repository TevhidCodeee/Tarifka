import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Product from "./pages/product";
import Detail from "./pages/Detail";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductPage" component={Product} options={{
          title:'TevhidShop',
          headerTitleAlign: 'center', 
          headerStyle:{backgroundColor:'#64b5f6'},
          headerTitleStyle:{color:'white'}
        }}/>
        <Stack.Screen name="DetailPage" component={Detail} options={{
          title:'Detay',
          headerTitleAlign: 'center', 
          headerStyle:{backgroundColor:'#64b5f6'},
          headerTitleStyle:{color:'white'},
          headerTintColor:'white'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}