import PropTypes from "prop-types";

const Blog = ({blog, handlesTime, handlesMark}) => {
    const {author, title,cover,posted_date,author_img,hashtags,reading_time} = blog
    return (
        <div> 
            <  div className="card w-[800px] bg-base-100 shadow-2xl mb-4">
                <img src={cover} alt="Shoes" />
                <div className="card-body ">
                     <div className="flex justify-between">
                         <div className="flex gap-6 items-end">
                              <img className="w-16" src={author_img} alt="" />
                               <div className="">
                                   <h1 className="text-2xl">{author}</h1>
                                   <p>Post : {posted_date}</p>
                               </div>
                         </div>
                         <div className="flex gap-6 items-center">
                                  <p>{reading_time} min read</p>
                                  <button onClick={()=>handlesMark(title)} className="">BookMark</button>
                         </div>
                     </div>
                     <h1 className="text-4xl font-extrabold">{title}</h1>
                    
                        <p className="">
                        {
                            hashtags.map((hash,idx )=> <span className="mr-4" key={idx}><a href="">#{hash}</a></span>)
                         }
                        </p>

                        <button onClick={()=>handlesTime(reading_time)} className="text-blue-600 flex justify-start">Mark as read</button>     
                </div>
           </div>
        </div>
    );
};

 Blog.propTypes = {
     blog:PropTypes.object.isRequired,
     handlesTime: PropTypes.func,
     handlesMark: PropTypes.func
 }

 
export default Blog;