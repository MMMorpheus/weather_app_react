import React, {useState} from 'react';
import { getWeather } from './components/api';

// import Dashboard from './components/dashboard/dashboard';
import SearchBar from './components/search-bar/search';
import Card from './components/weather-card/card';

import styled from 'styled-components';

const AppWrapper = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bfd1e3;
`

function App() {

  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);

  const makeRequest = () => {
    getWeather(location)
    .then(res => res.json())
    .then(data => setData(data));
    setLocation('');

}
  
  return (
    <AppWrapper>
      <SearchBar location={location} setLocation={setLocation} request={makeRequest}/>
      {data && <Card data={data}/>}
    </AppWrapper>
  )

}

export default App
