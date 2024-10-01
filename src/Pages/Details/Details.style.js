import { Dimensions, StyleSheet } from "react-native";
const {width} = Dimensions.get("window");

export default StyleSheet.create({


    container:{},
    image:{
        width:width*1,
        height:250,
    },
    text_container:{},
    title:{
        color:"red",
        fontSize:26,
        padding:10,
        borderBottomWidth:3,
        borderBottomColor:"gray"
    },
    instructions:{
        padding:5,
        fontSize:20,

    },
    button:{
        flex:1,
        backgroundColor:"red",
        height:50,       
        justifyContent:"center",
        alignItems:"center", 
        borderRadius:14,
        marginBottom:30,
        marginTop:10,
    },
    text_Youtube:{
        color:"white",
        fontSize:20,
        
       
    }
    
})