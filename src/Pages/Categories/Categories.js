import React from "react";
import {FlatList} from 'react-native';
import CategoriesCard from "../../Component/CategoriesCard";
import Config from "react-native-config";
import useFetch from "../../Hooks/useFetch";

export default function Categories({navigation}){

    const {data} = useFetch(Config.API_CATEGORIES_URL);

    const handleMealSelect = strCategory =>{
        navigation.navigate('MealPage',{strCategory})
    }

    const categoriesRender =({item}) => 
        <CategoriesCard category={item}
            onSelect={() =>handleMealSelect(item.strCategory)} 
        />

    return(
        <FlatList
        data={data.categories}
        renderItem={categoriesRender}/>
    )
}

