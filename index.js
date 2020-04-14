import React from 'react';
import { render } from 'react-dom';

const Saludo = ()=>{
  return <p>hola</p>
}

const App = ()=>{
  return <h1> <Saludo/> </h1>;
}


render(<App />,document.getElementById('react-app'));