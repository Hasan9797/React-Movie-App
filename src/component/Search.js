import { useState } from "react";

export default function Search({searchMovies}) {
  const [search, setSearch] = useState('panda');
  const [type, setType] = useState('all');


 const enterHendler = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

 const searchFilter = (e) => {
    setType(e.target.dataset.type)
    searchMovies(search, type);
  };

 
    return (
      <div classNameName="search">
        <div className="input-field col s12">
          <input
            id="search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value )}
            onKeyDown={enterHendler}
          />
          <label htmlFor="#">
            <i className="material-icons seacrh">search</i>
          </label>
          <button
            className="btn btn-search"
            onClick={() =>
              searchMovies(search, type)
            }
          >
            Search Movie
          </button>
        </div>
        <label>
          <input
            class="with-gap"
            name="radio"
            type="radio"
            data-type="all"
            onChange={searchFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            class="with-gap"
            name="radio"
            type="radio"
            data-type="movie"
            onChange={searchFilter}
            checked={type === "movie"}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            class="with-gap"
            name="radio"
            type="radio"
            data-type="series"
            onChange={searchFilter}
            checked={type === "series"}
          />
          <span>Series only</span>
        </label>
      </div>
    );
}
