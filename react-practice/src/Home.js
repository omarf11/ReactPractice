import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    // let name = "omes";

    //use state hooks using js destructering 
    //first value is the variable name ur creating and the second is the function name for the setter fcn
    //this is how u make a reactive variable for state management
    // const [name, setName] = useState("omes");
    // const [age, setAge] = useState(25);


    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //first param is callback function
    //second param lets fcn know which 
    //variable useEffect is watching
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                if (!res.ok) {
                throw Error("Could not fetch the data for that resource")    
                }
                return res.json()
            })
            .then((data) => {
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((err)=>{
                console.log(err.message);
                setIsLoading(false);
                setError(err.message);
            });
                
    }, [])



    return (

        <div className="home">
            {error && <div> {error}</div>}
            {isLoading && <div> Loading.... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}

        </div>
    );
}

export default Home;