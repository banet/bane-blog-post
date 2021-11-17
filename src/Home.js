
import {useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {

   const [blogs, setBlogs] = useState(null)

   const [name, setName] =useState('mario')
    // Is "loading message" useState  
   const [isPending, setPending] = useState(true)
   // is "Error"  useState
   const [error, setError] = useState(null)

   // We can delete item with  setBlog() using id 
   const handleDelete = (id) => {
       const newBlog = blogs.filter(item => item.id !== id)
       setBlogs(newBlog)
       
}


useEffect( () => {
    // Lets setTimeot function to limit type for fech data and wrap whole fetch call BUT ONLY HERE not in a real situation projects!
    setTimeout( ()=> {
         // Fetch data from JSON server using endpoints url"http://localhost:8000/blogs"
    fetch('http://localhost:8000/blogs')
    // Waiting for promise "data"
        .then(res => {
            console.log(res)
            // But we need to check and send message if response is not "OK" we THROW THE ERROR
            if(!res.ok) {
               throw Error('could not fetch the data for that resource')
            }
            return res.json()
        })
        // ..then  we fired function when over promise is complete! 
        .then( data => {
            console.log(data)
            // Update data with useState function setName
            setBlogs(data)
            // Show updated message "Loading" only when you can fetch data
            setPending(false)
            setError(null)
        })
        .catch( (err) => {
           // console.log(err.message)
           setPending(false)
           setError(err.message)
        })
    }, 1000)
   
},[])

    return (  
        <div className="home">
            { error && <div>{ error }</div>}
            {isPending && <div>Loading ...</div>}
           {blogs && <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete}/>}
           {blogs && <BlogList blogs = {blogs.filter( (item) => item.author === 'luka')} title="One new Chapter" />}
           <button onClick={() => setName('luigi')}>Change name</button>
           <p>{name}</p>
        </div>
    );
}
 
export default Home;