import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp(){
  return (
    <h1>chai aur react</h1>
  )
}

/*

const ReactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank',
    },
    children : 'click me to visit google'
}

*/

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const variable = 'sunny you are doing good';

const ReactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click me to visit google',
  variable
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {ReactElement}
    <MyApp />
    {anotherElement}
    <App />
  </StrictMode>,
)
