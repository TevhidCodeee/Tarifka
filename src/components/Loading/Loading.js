import React from "react";
import LottieView from "lottie-react-native";

export default function Loading(){
    return <LottieView source={require('../../assets/Loading-Animation.json')} 
    style={{width: "100%", height: "100%"}}
    autoPlay/>;
//autoPlay bu component render olduğu anda ekrana yansıtılıcak tasarımı
// oto. çalıştırıcak
}