import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#ffc000",
        flex:1
    },
    body_container:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"row",
        marginBottom:10,
        marginTop:5,
        border:1,
        borderColor:"#698b69",
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        marginRight:10,
        marginLeft:10,
    },
    image:{
        resizeMode:"contain",
        width:100,
        minHeight:100,
        marginLeft:10
    },
    title_container:{
        flex:1,
        justifyContent:"center",
        padding:5
    },
    title:{
        color:"black",
        fontSize:25,

    }
})