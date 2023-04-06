import React, { useState,useEffect } from 'react'
import './App.css';

function App() {


  const [value,setValue]=useState("");
  const [results,setResults]=useState([]);
  const [first,setFirst]=useState(true);
  // YF_f3RqAc0eAvFsUusaQQNmLmYIa-zTVutJzrnWdwNo



  const fetchImages=()=>{
     fetch(`https://api.unsplash.com/search/photos?client_id=YF_f3RqAc0eAvFsUusaQQNmLmYIa-zTVutJzrnWdwNo&query=${value}&per_page=20`)
     .then(res=>res.json())
     .then(data=>{
      setResults(data.results);
      setValue("")
      setFirst(false)
     })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
     fetchImages();
    }
  };

  return (
    <>
      <div className='App'>
        <h1 className='main-heading'>Image Gallery</h1>
        <p style={{color:"red",fontFamily:'cursive'}} >*Note: Search images by keywords. (eg: pune, you will get images related to pune)</p>

        <div className='search'>
        <input type="text" 
         value={value}
         placeholder="Search"
         onChange={(e=>setValue(e.target.value))}
         onKeyDown={handleKeyDown}
        />
        <button onClick={()=>fetchImages()} ><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
        </div>
        
        
        <div className='images'>
         { 
          (results && results.length ) || first > 0 ? results.map((elem)=>{
                return(
                    <img  src={elem.urls.regular} alt="/" />
                );
          }): (
           
              <h3 style={{color:'#fff',fontFamily:'cursive'}}>Sorry, no such image exists in our dataset. Please try a different search term !</h3>
             
             )}
          
          }
        </div>
      </div>
    </>
  );
}

export default App;
