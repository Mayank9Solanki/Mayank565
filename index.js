import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Footter from './Footter';
import Navbar from './Navbar';
import About from './About';
import Destinations from './Destinations';
import Package from './Package';
import Blogpost from './Blogpost';
import Blogsingnel from './Blogsingnel';
import Contact from './Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path='/' element={< App/>} />
      <Route path='/About' element={<About/>}/>
      <Route path='/Destinations' element={<Destinations/>}/>
      <Route path='/Package' element={<Package/>}/>
      <Route path='/Blogpost' element={<Blogpost/>}/>
      <Route path='/Blogsingnel' element={<Blogsingnel/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    <Footter/>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
