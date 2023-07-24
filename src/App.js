import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './routes/Home';
import Create from './routes/Create';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
    </Routes>
  )
}

export default App
