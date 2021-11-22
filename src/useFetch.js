import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    

    useEffect(() =>{
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw Error('could not fetch the data for that resourse')
                }
                return response.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
                
            })
            .catch( err => {
                // console.log(err.message)
                setIsLoading(false)
                setError(err.message)
            })
        }, [url])

        return { data, isLoading, error}
    
}
 
export default useFetch;