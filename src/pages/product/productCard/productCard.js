import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './productCard.style';

const ProductCard = ({product,onSelect}) => {
    return(
       <TouchableWithoutFeedback onPressIn={onSelect}>
         <View style={styles.container}>
            <Image style={styles.image}
            source={{uri: product.image}}
            />
            <View style={styles.body_container}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
            </View>
         </View>
       </TouchableWithoutFeedback>
    )
}
export default ProductCard;

//TouchableWithoutFeedback: Basıldığında opaklık efecti vermez
//geçirme propertiesi onuda onPressle yakalamış olucaz

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//     "rate": 3.9,
//     "count": 120
//     }
//     },