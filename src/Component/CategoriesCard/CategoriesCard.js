import React from "react";
import { Text, View,Image, TouchableWithoutFeedback } from 'react-native';
import styles from './CategoriesCard.style';

export default function CategoriesCard({category, onSelect}){
    return(
        <TouchableWithoutFeedback onPressIn={onSelect}>
            <View style={styles.container}>
                <View style={styles.body_container}>
                    <Image style={styles.image} source={{uri: category.strCategoryThumb}}/>
                    <View style={styles.title_container}>
                        <Text style={styles.title}>{category.strCategory}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

