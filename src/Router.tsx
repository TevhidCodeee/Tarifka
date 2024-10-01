import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from "./Pages/Categories/Categories";
import Details from "./Pages/Details/Details";
import Meal from "./Pages/Meal/Meal";



const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} options={{
          headerTitleStyle:{color:"#ffc000", fontWeight:"600", fontSize:25},
          headerTitleAlign:"center"
        }}/>
        <Stack.Screen name="MealPage" component={Meal} 
        options={{
          headerTitleStyle:{color:"#ffc000", fontWeight:"600", fontSize:25}, 
          headerTitleAlign:"center"}}/>
        <Stack.Screen name="DetailsPage" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}