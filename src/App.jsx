// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Homepage/Home"
// import { useEffect, useState } from "react"


const App = () => {

 
  return (
    <div className="app">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<h1>Movie details page</h1>}></Route>
          <Route path="movies/:type" element={<h1>hi</h1>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App