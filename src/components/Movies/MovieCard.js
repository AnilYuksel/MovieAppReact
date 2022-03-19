import React from "react";
import "./MovieCard.css"
import {Link} from "react-router-dom"

const MovieCard = ({ movie }) => {

  return (
    <>
      <div className="card m-2" >
        <div className="card-hover">
          <div className="card-hover-content text-center">
          <Link id="btn-modal" to={`/movie-detail/${movie.id}`} state={{movie:movie}}><i className="fa-solid fa-plus"></i></Link>       
          </div>
        </div>
        <div id="card-image">
          <img src={movie.imageURL} className="card-img-top rounded" alt="..." />
        </div>
        <div className="card-body">
          <p><i id="star" className="fa-solid fa-star"></i> {movie.rating}</p>
          <h5 className="card-title mt-2">{movie.name}</h5>
        </div>
      </div>
    </>
  )
}

export default MovieCard;
