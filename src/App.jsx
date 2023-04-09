import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getMovieList, searchMovie } from './api'

const App = () => {

 useEffect(() => {
   getMovieList()
 }, [])

  const search = (q) => {
     console.log({q})
  }

  return (
    <div className="App">
       <h1>ADRI MOVIE MANIA</h1>
       <input 
       placeholder="cari film kesayangan..." 
       className="movie-search"
       onChange={({target}) => search(target.value)} 
       />
       <div className="movie-container">
        <div className="movie-wrapper">
          <div className="movie-title">Contoh Movie</div>
          <img className="movie-image" src=""/>
          <div className="movie-date">5 - 4 - 2023</div>
          <div className="movie-rate">9.5</div>
        </div>
       </div>
    </div>
  )
}

export default App
