const Blog = ({blog}) => {
    const {author} = blog
    return (
        <div>
            <h1>{author}</h1>
        </div>
    );
};

export default Blog;