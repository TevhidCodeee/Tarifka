import React from "react";
import { View,Text,Image, TouchableWithoutFeedback } from "react-native";
import styles from "./MealCard.style"

const MealCard=({meals, onSelect})=> {


    return (
        <TouchableWithoutFeedback onPressIn={onSelect}>
            <View style={styles.container}>
                <View style={styles.body_container}>
                    <Image style={styles.image} source={{uri: meals.strMealThumb}}/>
                    <View style={styles.title_container}>
                        <View style={styles.transparent}>
                            <Text style={styles.title}>{meals.strMeal}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}
export default MealCard;