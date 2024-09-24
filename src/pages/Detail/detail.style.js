import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const DeviceSize = Dimensions.get('window');

export default StyleSheet.create({
    contianer:{
        flex:1
    },
    body_container:{
        padding:10,
    },
    image_container:{
        backgroundColor:"white",
        padding:10,
    },
    image:{
        width:DeviceSize.width,
        height:DeviceSize.height/3,
        resizeMode:"contain",
        backgroundColor:"white",
        paddingTop:10
    },
    title:{
        fontWeight:"bold",
        fontSize:25,
        color:"black",
        textAlign:"center",
        marginTop:10

    },
    desc:{
        fontStyle:"italic",
        marginVertical:5,
        color:"black",
        paddingLeft:20
    },
    price:{
        fontWeight:"bold",
        fontSize:22,
        textAlign:"right",
        paddingRight:20,
    },
    
})