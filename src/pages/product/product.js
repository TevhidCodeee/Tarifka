import React, { useEffect, useState } from "react";
import { Text, View,FlatList, ActivityIndicator } from 'react-native';
import Config from "react-native-config";
import axios from "axios";

import ProductCard from "./productCard/productCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function Product({navigation}){
    
    const {loading, data, error} = useFetch(Config.API_URL);
    //ürünler custom hooktan bize gelmiş oldu
    //ve güncellenen loading data ve erroruda takip edebiliyoruz

    const handleProductSelect = id => {
        navigation.navigate('DetailPage', { id });
//herhangi bir ürün seçildiği anda detay sayfasına gitmekte
//bu fonksiyonda ilerlerken id parametresinide o sayfaya gönder dedik

    }
//en genel fonks. da navigationu parçalamamız lazım
//DetailPage componentine handleProductSelect arkadaşı göndericez

    const renderProduct = ({item})=>
    <ProductCard product = {item} onSelect={()=>handleProductSelect(item.id)}/>;
//productCardın product parametresine item ı gönderdik
//productCard seçildiği anda on select işlemide yapılsın
//fonksiyonun id sini dışarı gönderdik

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
            <FlatList 
            data={data}
            renderItem={renderProduct}/>
        </View>
    )
}

//ilk olarak useEfect içinde bir fetch isteği atarak axios ile veri çekme işlemi gerçekleştiricez
//Promise yapısını kullanmak için async ekini getirmemiz gerekiyor

//custom hook dediğimiz yapılar kendi use(özel useState, useEffect vb) ön eki getirdiğimiz özel fonksiyonlardır
//tamamen bizim ihtiyaçlarımıza göre şekillenen ve lifecycle içerisindeki
//statelere ve yaşam döngülerine uyum sağlayan özel fonksiyonlardır