import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import { Home, About, Menu, Career, Contact, Login, Book, Error404 } from "./components";
import React from 'react'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='menu' element={<Menu />} />
            <Route path='career' element={<Career />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App