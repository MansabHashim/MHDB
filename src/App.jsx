// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Homepage/Home"
// import { useEffect, useState } from "react"
// import Card from "./Components/Card"
import MovieLlist from "./Components/MovieLlist"
import MovieDetails from "./Pages/MovieDetail/MovieDetails"

const App = () => {

 
  return (
    <div className="app">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/movie/:id" element={<MovieDetails/>}></Route>
          <Route path="movies/:type" element={<MovieLlist/>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App