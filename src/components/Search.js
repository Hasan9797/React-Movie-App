import { Component } from "react";

export default class Search extends Component {
  state = {
    search: "panda",
    type: "all",
  };

  hedlerKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  hendlerFilter = (e) => {
    this.setState(() => ({ type: e.target.dataset.type }), () => {
      this.props.searchMovie(this.state.search, this.state.type)
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              id="search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
              onKeyDown={this.hedlerKey}
            />
            <label for="search">Search</label>
            <button
              className="btn search-btn"
              onClick={() =>
                this.props.searchMovie(this.state.search, this.state.type)}>
              Search Movies
            </button>
            <div>
              <label>
                <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  data-type="all"
                  onChange={this.hendlerFilter}
                  checked={this.state.type === 'all'}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  onChange={this.hendlerFilter}
                  checked={this.state.type === 'movie'}
                />
                <span>Movies only</span>
              </label>
              <label>
                <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  onChange={this.hendlerFilter}
                  checked={this.state.type === 'series'}
                />
                <span>Series only</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
