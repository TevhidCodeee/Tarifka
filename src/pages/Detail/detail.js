import React from "react";
import { Text, View, Image } from 'react-native';

import styles from './detail.style';
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function Detail({ route }) {
    //stack yapısının altında yer aldığı için burdan rooute diyerek parametrelere erişim sağlayabiliriz
    const { id } = route.params;
    //paramsın içinden id yi çektik
    
    const {loading, data, error} = useFetch(`${Config.API_URL}/${id}`);

    if(loading){
        return <Loading/>
        //return <ActivityIndicator size="large"/>;//loading durumu true ise bu arkadaşı geri dönder
    }
    if(error){//ğer errorun içi dolarsa error mesajı dön
        return <Error/>
    //(Config.API_URL +"jfgjg"); bunu gibi yanlış yerden apı almak gibi
    }

    return(
        <View>
            <View style={styles.image_container}>
                <Image source={{uri: data.image}} style={styles.image}/>
            </View>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desc}>{data.description}</Text>
            <Text style={styles.price}>{data.price}</Text>
        </View>
    )
}

//ürünü id bilgisine göre seçeriz