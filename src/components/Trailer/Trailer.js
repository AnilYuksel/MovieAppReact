import { useLocation } from "react-router-dom";
import "./Trailer.css"

const Trailer = ({ handleClose }) => {
    const location = useLocation()
    const { movie } = location.state

    return (
        <>
                <div className="d-flex justify-content-between" id="button-trailer">
                    <h3 className="trailer-h my-2 mx-2">{movie.name}</h3>
                    <button  onClick={handleClose}><i class="fa-solid fa-square-xmark mx-1"></i></button>
                    </div>
                <iframe id="trailer-video" width="800" height="430" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>             
        </>
    )
}

export default Trailer;