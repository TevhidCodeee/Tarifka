import React from "react";
import { View,Text,Image,ScrollView,Linking,Button, TouchableOpacity } from "react-native";
import useFetch from "../../Hooks/useFetch";
import styles from "./Details.style";

const Details=({route})=>{
    
     const {name}=route.params;

    function handleYoutube(link){
 
        Linking.openURL(link)
    }
    
    const{error,loading,data}=useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    
    if (loading) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
      }

      if (error || !data?.meals) {
        return (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Bir hata oluştu veya yemek bulunamadı.</Text>
          </View>
        );
      }
    return (
        <ScrollView  style={styles.container}  >
            <Image style={styles.image} src={data?.meals[0].strMealThumb} ></Image>
            <View style={styles.text_container} >
                <Text style={styles.title} >{data?.meals[0].strMeal}</Text>
                <Text style={styles.instructions} >{data?.meals[0].strInstructions}</Text>
                
            </View>
            <TouchableOpacity style={styles.button}  onPress={()=>handleYoutube(data?.meals[0].strYoutube)} >
             <Text style={styles.text_Youtube} >WATCH ON YOUTUBE</Text>   
            </TouchableOpacity>
        </ScrollView>
    )
}
export default Details;