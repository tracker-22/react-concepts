import {useState, useEffect} from "react";

export const useFetch = (URL) => {

    const [data , setData] = useState([])

    useEffect(() => {
      
        fetch(URL)
            .then(response => response.json())
            .then(json => setData(json))
            
    },[])

    return data;

}