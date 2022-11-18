import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createGlobalStyle} from 'styled-components'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;


  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
    <GlobalStyles />
    <App />
 </>
 
 
)
