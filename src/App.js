import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://5peim4ixwj.execute-api.us-east-2.amazonaws.com/development/');
      console.log(res.data);
      setData(res.data);
    }
    fetchData();
  }, []);
  const apiData = data.map((x) =>
    <div style={{ margin: '20px' }}>
      <div key={x.id}>{'Url: '}{x.url}</div>
      <div>{'name:'}{x.name}</div>
    </div>)
  return (
    <div className="App">
      <h1>Lambda</h1>
      {apiData}
    </div>
  );
}

export default App;
