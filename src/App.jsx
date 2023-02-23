import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import Container from "./components/Container";
import { useEffect, useState } from "react";

function App() {
  const API_URL = `http://www.omdbapi.com/?apikey=ecf1a212&`;

  const [movies, setMovies] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies([data.Search]);
    console.log(setMovies);
  };

  useEffect(() => {
    searchMovie("Batman");
  }, []);
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
