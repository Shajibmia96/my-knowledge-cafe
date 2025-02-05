import { useState } from "react";
import Blog from "../Blog/Blog";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Blogs = ({handlesTime,handlesMark}) => {
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
                blogs.map( blog => <Blog 
                    key={blog.id}
                    blog ={blog}
                    handlesTime={handlesTime}
                    handlesMark ={handlesMark}
                     ></Blog>)
               }
        </div>
    );
};
    Blogs.propTypes = {
        handlesTime: PropTypes.func,
        handlesMark: PropTypes.func
    }

export default Blogs;