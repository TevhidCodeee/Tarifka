import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        backgroundColor:"#ffc000",
        flex:1
    },
    body_container:{
        flex:1,
        padding:10,
    },
    image:{
        borderRadius:10,
        width:width*0.95,
        height:height*0.3
    },
    title_container:{
        flex:1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        marginTop:-56,
        paddingBottom:20,
        justifyContent: 'center',
        alignItems: 'center',
        borderEndEndRadius:10,
        borderStartEndRadius:10,
    },
   
      title: {
        marginTop:10,
        textAlign:"center",
        color: 'white',
        fontSize: 20,
        fontWeight:"bold"
      },
})