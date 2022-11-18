import Dashboard from './components/dashboard/dashboard';
import Search from './components/search-bar/search';
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
  
  return (
    <AppWrapper>
      <Search />
      <Card />
    </AppWrapper>
  )

}

export default App
