import axios from 'axios'
import {useState, useEffect} from 'react'

const useGetListByEndPointData = (endpoint) => {
    const [state, setState] = useState([])

    useEffect(() => {
        const fetchApiData = async () => {
            const response = await axios.get(endpoint);
            try {
                if (response.data) {
                  setState(response.data.products)  
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchApiData()
    }, [endpoint])

  return { state }
  
}

export default useGetListByEndPointData