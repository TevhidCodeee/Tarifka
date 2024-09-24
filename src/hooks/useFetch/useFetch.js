//kendi içinde state ve lifecycle çalıştıran özel bir fonksiyon
//Geriye sadece bir state return etmiş oluruz

import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url){//useFetch içine bir url göndericez ve oraya bir istek atılıcak
    //bana dönen istek sonucunda bu değerleri statelerde saklayacağız
    const[error, setError]=useState(null)
    const[loading, setLoading] = useState(true)//ilk anda true
    const[data, setData] = useState([]);
    const fetchData = async () => {
        try{
            const {data : responseData} = await axios.get(url);
// ne zaman bunu çağırırsak içine gönderdiğimiz parametre üzerinden istek atmış oluruz
// o yüzden cConfig.API_URL kaldırdık başka sayfalardada bu fonksiyonu kallanabilmek için
//endpointten veri çektik
            setData(responseData);
//ürünler geldiğinde false a çekilsin
            setLoading(false)
        }catch(err){
            setError(err.message)
            setLoading(false)
        }
      
    }
// response içinden belli parametreler geliyor ve bizim datayı parçalamamız lazım
//response dan datayı parçala veri gelene kadarda bekle
//geldiği zamanda setData şçine veriyi gönder
    //ürünlerime useEfectin içinde fetchData fonks. ile direk veri gönderebiliyorum
    useEffect(()=>{
        fetchData();
    },[]);
//componentimiz mount olduğu anda useEfectle fetch(veri çekme) işlemi gerçekleştiriyoruz

    return{error,loading,data};//stateleri geri döndürdük
}

//çağırdığımız anda bişey çalışsın o zaman useEffect fonks. kullanmamız gerek
//useFetch fonks çalıştığı anda içerideki parametreye istek atıcakve 
//istek sonunda erroruda, loadingide, datayı da bana geri döndürecek

export default useFetch;