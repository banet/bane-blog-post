import { Link } from "react-router-dom"

function BlogList ({ blogs}) {

    // const blogs = props.blogs
    // const title = props.title
    
    return (  
        <div className="blog-list">
            
        {blogs.map(function(blog){
            return(
                
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>Written by {blog.author}</p>
                    </Link>
                   
                    
                </div>
               
            )
        })}

        </div>
    )
}

export default BlogList

