import React, { useEffect } from 'react'
import { useState } from 'react'

const Card =({name,flag}) =>{
  return (
    <div
    style={{ 
      paddingTop: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1px',
      border: '1px solid gray',
      borderRadius: '10px',
      width: '205px',
      height: '220px',
      textAlign: 'center',
    }}
  >
    <img src={flag}
    alt={`flag of ${name}`}
    style={{ width: '40%', height: '40%' }}
   />
   <h1>{name}</h1> 
  </div>
  )
}
      const endpoint ='https://xcountries-backend.azurewebsites.net/all';
export default function App(){
  const [apiData, setApiData] = useState([]);
  useEffect(() => { 
      fetch(endpoint).then((response) =>response.json()).then((data) =>{ setApiData(data) }).catch((error)=> console.error("Error fetching data: ",error))
  },[]);
  return (
    <div 
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
      }}
      
      >
      {apiData.map(({name,flag,abbr}) => (  
        <Card key={abbr} name={name} flag={flag}/>
      ))}
    </div>
  )
}