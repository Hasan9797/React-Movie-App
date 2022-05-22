import React, { Component } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default class Main extends Component{
    state = {
        movie: [],
        loader: true,
    }

    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=d6434e44&s=panda')
        .then(respons => respons.json())
        .then(data => this.setState({movie: data.Search, loader: false}))
    }

    searchHendler = (str, type = 'all') => {
        this.setState({loader: true})
        fetch(`http://www.omdbapi.com/?apikey=d6434e44&s=${str}${type !== 'all' ? `&type=${type}` : "" }`)
        .then(respons => respons.json())
        .then(data => this.setState({movie: data.Search, loader: false}))
    }

    render(){
        return(
            <div className="container content">
                <Search searchMovie={this.searchHendler}/>
                {this.state.loader ? <Loader /> : (<Movies movies={this.state.movie}/>)}
            </div>
        )
    }
}