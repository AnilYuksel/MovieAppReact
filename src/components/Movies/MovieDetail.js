import "./MovieDetail.css"
import { useLocation, Link } from "react-router-dom";
import { Modal } from "react-bootstrap"
import { useState } from "react"
import Trailer from "../Trailer/Trailer"
import NavigationBar from "../Navigation/NavigationBar"

const MovieDetail = () => {

  const location = useLocation()
  const { movie } = location.state

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

    <NavigationBar></NavigationBar>
      <div className="d-flex flex column">

        <div><img src={movie.detailImgUrl} alt="" id="image"></img></div>
        <div><div className="d-flex flex-column h-100 justify-content-center mx-4">
          <h1 id="movie-name" className="mt-2">{movie.name}</h1>
          <p className="my-2"><i className="fa-solid fa-star"></i> {movie.rating} - {movie.date}</p>
          <hr id="divider" className="divider"></hr>
          <p id="movie-overview">{movie.overview}</p>
          <hr id="divider" className="divider"></hr>
          <subtitle className="mt-2">Director</subtitle>

          <p className="m-0">{movie.director}</p>
          <div className="d-flex mt-4">
            <div id="trailer-button"><button onClick={handleShow}><i className="fa-solid fa-play"> Trailer </i> </button></div>
            <div id="trailer-button" className="mx-3"><Link to="/"><button><i className="fa-solid fa-house"> HOME </i></button></Link></div>
          </div>
        </div>
        </div>
      </div>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body id="modal-body">
          <Trailer movie={movie} handleClose={handleClose}></Trailer>
        </Modal.Body>
      </Modal>
    </>

  )
}

export default MovieDetail;
