import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const movies=useSelector((store)=>store?.movies)
  return ( movies &&
    <div className=' bg-black'>
      <div  className='-mt-60 relative z-20 pl-12'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Tv Series"} movies={movies?.TvSeries} />
      <MovieList title={"Top Rated"} movies={movies?.TopRatedMovies} />
      <MovieList title={"Popular"} movies={movies?.PopularMovies} />
     
      <MovieList title={"Upcoming Movies"} movies={movies?.UpComingMovies} />
     
      </div>
    </div>
  )
}

export default SecondaryContainer
