import React, { useState } from 'react'
import './App.css';

function App() {

  const [value,setValue]=useState("");
  const [results,setResults]=useState([]);
  // YF_f3RqAc0eAvFsUusaQQNmLmYIa-zTVutJzrnWdwNo

  const fetchImages=()=>{
     fetch(`https://api.unsplash.com/search/photos?client_id=YF_f3RqAc0eAvFsUusaQQNmLmYIa-zTVutJzrnWdwNo&query=${value}&per_page=20`)
     .then(res=>res.json())
     .then(data=>{
      setResults(data.results);
      setValue("")
     })
  }

  return (
    <>
      <div className='App'>
        <h1>Image Gallery</h1>
        <div className='search'>
        <input type="text" 
         value={value}
         placeholder="Search"
         onChange={(e=>setValue(e.target.value))}
        />
        <button onClick={()=>fetchImages()}><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
        </div>
        

        <div className='images'>
         { results.map((elem)=>{
                return(
                    <img  src={elem.urls.regular} alt="/" />
                );
          })
          }
        </div>
      </div>
    </>
  );
}

export default App;
