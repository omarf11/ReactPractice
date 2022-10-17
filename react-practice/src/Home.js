import { useState } from "react";


const Home = () => {
    // let name = "omes";

    //use state hooks using destructering 
    //first value is the variable name ur creating and the second is the function name for the setter fcn
    //this is how u make a reactive variable for state management
    // const [name, setName] = useState("omes");
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     // console.log("hello World"+ name);
    //     // name = "tom";

    //     if (name === "omes") {
    //         setName("toemar")
    //     } else { setName("omes") }
    // }
    // const handleClickAgain = (name) => {
    //     console.log("hello World Again " + name);
    // }
    // const handleClick2 = () => {
    //     // console.log("hello World"+ name);
    //     // name = "tom";
    //     setAge(age + 1);
    // }



    const[blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
   let b= blogs.map(blog=>(
        <div className="blog-preview" key={blog.id}> 
        <h2>{blog.title}</h2>
        <p> Authored by {blog.author}</p>
        </div>
    ))
    
    return (
        
        <div className="home">   
            {/* <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me to toggle in between names</button>
            <br />
            <button onClick={handleClick2}>Click Me to increase age!</button> */}
            {/* <button onClick={()=>handleClickAgain("omes")}>Click Me Again</button> */}

            {b}

        </div>
    );
}

export default Home;