import "./MovieList.css"
import { useContext } from "react";
import { MoviesContext } from "../../contextApi/MoviesContext";
import MovieCard from "./MovieCard"



const MovieList = () => {

    const { movies, selectedCategory } = useContext(MoviesContext)

    return (
        <>
            <div className="container">
                <h1 className="my-3 mx-3" >MOVIES  {selectedCategory.name}</h1>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="row w-100">
                        {movies.map((movie) => (
                            <div id="card" className="col-xxl-2 col-xl-3 col-lg-3 col-m-4 col-sm-4" key={movie.id}>   
                                <MovieCard movie={movie}></MovieCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieList;