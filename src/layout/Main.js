import { useState, useEffect } from "react";
import Movies from "../component/Movies";
import Search from "../component/Search";
import Loader from "../component/Loader";

export default function Main() {
  const [movie, setMovie] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
      fetch("http://www.omdbapi.com/?apikey=d6434e44&s=panda")
      .then((respons) => respons.json())
      .then((data) => setMovie(data.Search), setLoader(false))
  }, []);

  const searchHendler = (str, type = "all") => {
    setLoader(true);
    fetch(
      `http://www.omdbapi.com/?apikey=d6434e44&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((respons) => respons.json())
      .then((data) => setMovie(data.Search), setLoader(false));
  };

  return (
    <div className="container content">
      <Search searchMovies={searchHendler} />
      {loader ? <Loader /> : <Movies movies={movie} />}
    </div>
  );
}
