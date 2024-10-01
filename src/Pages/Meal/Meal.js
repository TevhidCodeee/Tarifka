import React from "react";
import {FlatList } from 'react-native';
import useFetch from "../../Hooks/useFetch";
import MealCard from "../../Component/MealCard";


export default function Meal({ route, navigation }) {
    const {strCategory} = route.params;

    const {data} = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`); 
 
    const handleDetailSelect = (name) =>{
        navigation.navigate("DetailsPage",{name})
    }

    const mealsRender =({item}) =>  
        <MealCard meals={item}
        onSelect={()=>handleDetailSelect(item.strMeal)} 
        />
    return(
        <FlatList
        data={data?.meals}
        renderItem={mealsRender}
        />        
    )
}