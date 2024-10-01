import {useState, useEffect} from "react";
import axios from "axios";

export default function useFetch(url){

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const {data: responseData} = await axios.get(url);
        if(data){
        setData(responseData);
        }
    }  

    useEffect(() => {
        fetchData();
    }, []);

    return {data};
}

