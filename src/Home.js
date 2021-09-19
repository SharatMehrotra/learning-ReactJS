import BlogList from  './BlogList'
import useFetch from './useFetch';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    const [title, setTitle] = useState('')
    const [url,seturl] = useState(`/`);
    return (
        <div className="home">
        {error && <div>{error}</div>}
        {isPending && !error && <div>Loading<p className="loading"></p></div>}
        {blogs && !error && <BlogList blogs={blogs } title="All Blogs!" ></BlogList>}
        {!isPending &&<div> <input onChange={(event) => 
        {

            var hasMatch = false;
            for(var i = 0; i<blogs.length;i++){
                console.log(typeof(blogs[i].id))
                if(blogs[i].id == parseInt(event.target.value)){                    hasMatch = true;
                setTitle(event.target.value)
                seturl(`/blogs/` + event.target.value)
                    break
                }
            }
            if(!hasMatch){
                seturl('/errorpageasblognotfound')
            }
        }} placeholder="Type blog id here" />
        <Link to={url}>
        <button>Search!</button>
        </Link></div>}
        </div>
    );
}
 
export default Home