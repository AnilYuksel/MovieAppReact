import Navigation from "./components/Navigation/Navigation";
import MovieList from "./components/Movies/MovieList";
import MoviesContextProvider from "./contextApi/MoviesContext";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/Movies/MovieDetail";


function App() {

  return (
    <div>
      <MoviesContextProvider>
        <Routes>
          <Route path="/" element={<Navigation></Navigation>}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<MovieList></MovieList>}></Route>
        </Routes>
        <Routes>
          <Route path="/movie-detail/:id" element={<MovieDetail></MovieDetail>}></Route>
        </Routes>
      </MoviesContextProvider>
    </div>
  );
}

export default App;
