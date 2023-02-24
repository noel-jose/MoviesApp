import "./App.scss";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";

function App() {
  const API_URL = `http://www.omdbapi.com/?apikey=ecf1a212&`;

  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("batman");
  const [loadMore, setLoadMore] = useState(1);

  const fetchData = async (title, loadMore) => {
    const response = await fetch(`${API_URL}&s=${title}&page=${loadMore}`);
    const data = await response.json();
    return data.Search;
  };

  const searchMovie = async (title, loadMore) => {
    const data = await fetchData(title, loadMore);
    setMovies((prevMovie) => {
      if (data === undefined) return [...prevMovie];
      return [...prevMovie, ...data];
    });
    console.log(movies);
  };

  useEffect(() => {
    setMovies([]);
    searchMovie(searchText === " " ? "batman" : searchText, loadMore);
  }, [searchText]);

  return (
    <div className="App">
      <Header />
      {searchText}
      <SearchBar setSearchText={setSearchText} />
      <div className="container">
        {movies?.length > 0
          ? movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          : "There are no movies"}
      </div>
    </div>
  );
}

export default App;
