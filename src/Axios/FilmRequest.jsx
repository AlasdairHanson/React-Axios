import React, {useState} from 'react';
import axios from 'axios';

const FilmRequest = (props) => {

    const [data,setData]= useState(""); // data stored from axios get request
    const [apiKey, setApiKey] = useState("");
    const [filmTitle, setFilmTitle] = useState("");

    const updateApiKey = (e) => {
        e.preventDefault(); 
        setApiKey(e.target.value);
    }
     const updateTitle = (e) => {
        e.preventDefault(); 
        setFilmTitle(e.target.value);
     }

    const makeRequest =(e) => {
        axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + filmTitle)
        .then(response => {
          console.log(response.data); 
          setData(response.data);
        });
    };

    return (
  <>
      <div>
        <h2>Film Request</h2>
      <p>Enter your API Key</p>
      <input type="text" onChange={(e)=>updateApiKey(e)} />
      <p>Enter the name of the film</p>
      <input type="text" onChange={(e)=>updateTitle(e)} />

      <button onClick={(e) => makeRequest(e)}>Search</button>

      <h4>{data.Title}</h4>
      <h4>{data.Year}</h4>
      <h4>{data.Rated}</h4>
      <h4>{data.Genre}</h4>
      <h4>{data.Plot}</h4>
      <img src={data.Poster} alt="The poster"></img>
      </div>
  </>
  );

}

export default FilmRequest;