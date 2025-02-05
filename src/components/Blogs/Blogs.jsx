import { useState } from "react";
import Blog from "../Blog/Blog";
import { useEffect } from "react";

const Blogs = () => {
      const [blogs, setBlogs] = useState([])

        useEffect(()=>{
             fetch('../../../public/blogs.json')
             .then(res => res.json())
             .then(data => setBlogs(data)
             )
        },[])
    return (
        <div>
               
               {
                blogs.map( blog => <Blog key={blog.id} blog ={blog}></Blog>)
               }
        </div>
    );
};

export default Blogs;