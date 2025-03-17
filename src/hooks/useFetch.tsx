import { useEffect, useState } from "react"
import axios from "axios";

const useFetch = (endpoint:string) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async()=>{
        try {
            setLoading(true)
            const response = await axios.get(endpoint);
            setLoading(false);
            setData(response.data.results);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
    
    return {data, loading }
}

export default useFetch;
