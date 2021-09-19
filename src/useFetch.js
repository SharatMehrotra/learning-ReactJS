import {useState,useEffect} from 'react';
const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, seterror] = useState(null);
    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
            .then((response) => {
                if(!response.ok){
                    
                    throw Error('could not fetch data from server')
                }
                return response.json()
            })
            .then((data) =>{
                setdata(data);
                setisPending(false);
                seterror(null);
            })
            .catch((err) =>{
                if(err.name === 'AbortError'){
                    console.log('Fetch aborted');
                }
                else{
                    seterror(err.message);
                    setisPending(false);
                }
            })
        },1000);
        return ()=>{
            abortCont.abort();
        }
    },[url]);

    return {data,isPending,error}
}

export default useFetch