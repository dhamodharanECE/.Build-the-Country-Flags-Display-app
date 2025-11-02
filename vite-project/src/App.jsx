import React, { useEffect, useState } from 'react';

const Card = ({ name, flag }) => {
  return (
    <div
      data-testid="country-card"
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
      <img
        src={flag}  
        alt={`flag of ${name}`}
        style={{ width: '70%', height: '40%', gap: '10%' }}
        data-testid="country-flag"
      />
      <h1 data-testid="country-name">{name}</h1>
    </div>
  );
};

const endpoint = `https://xcountries-backend.labs.crio.do/all`;

export default function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
4
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setApiData(data);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div data-testid="loading">Loading countries...</div>;
  }

  if (error) {
    return <div data-testid="error">Error: {error}</div>;
  }

  return (
    <div
      data-testid="countries-container"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        padding: '20px',
        justifyContent: 'center'
      }}
    >
      {apiData.length > 0 ? (
        apiData.map(({ name, flag, abbr }) => (
          <Card key={abbr} name={name} flag={flag} />
        ))
      ) : (
        <div data-testid="no-countries">No countries found</div>
      )}
    </div>
  );
}