import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:"#bdbdbd",
        backgroundColor:"#e0e0e0",
        margin:10,
        flexDirection:"row",
    },
    image:{
        width:100,
        // height:100,
        minHeight:100,
//image en 100 br olsun ama artmak istiyorsada dahada artabilir anlamına gelir
        resizeMode:"contain",
        backgroundColor:"white",
    },
    body_container:{
        flex:1,// vermezsek yazılar view dışına kayar 
        padding:5,
    },
    title:{
        color:"black",
        fontWeight:"bold",
        fontSize:18,
    },
    price:{
        color:"black",
        justifyContent:"space-between",
        textAlign:"right",
        fontSize:16,
        fontStyle:"italic",
        paddingRight:10,
        paddingTop:35,
    },
})

//flex bulunduğu yer içerisinde her yeri kaplar
//view içteki childın kapladığı kadar yer kaplar
//height kaldırdığımzda default olarak artık yükseklik verir
//ve içinde ne kadar alan varsa o kadar yer kaplar(image için yaptık)