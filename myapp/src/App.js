
 import React from 'react'
 import Axios from 'axios'
 import { useState } from 'react';
 import './App.css';
const key='42458e9b6cd72bed413646a9488c9acd';

const App= () =>{ 

  const [city,setCity]= useState("");
  const [data,setData]= useState();
  const fetchData = async ()=>{
    try{
      const response= await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      setData(response.data);
    }
    catch(err){
      alert('Please enter the city name correctly');
    }
  }
  return(
    <div className='App'>
      <h1 className='title'>Weather App</h1>
      <div className='input-container'>
        <input
        type="text"
        className='input'
        value={city}
        onChange={e=> setCity(e.target.value)}
        placeholder="Enter the city name..."
      />
    </div>
    <button  className='button' onClick={fetchData}>Fetch</button>
    <div>
      {data &&(
        <div className='container'>
         <h1> {data.name},{data.sys.country}</h1>
           <div className='weather-info'>
            <div>{Math.round(data.main.temp)}C</div>
            <div>
              <div>Lat-{data.coord.lat}</div>
              <div>Lon-{data.coord.lon}</div>
              </div>
        </div>
      </div>
      )}
    </div>
    </div>
  )
};

export default App;
