import React, { Component} from "react";
import Filter from './filter';


const ENTER_KEY = 13;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: '',
            movieList: this.props.movieList,
            filteredMovies: this.props.movieList
        };
        
        this.onSearchClick = this.onSearchClick.bind(this);
        //this.onEnterClick = this.onEnterBound.bind(this);
    }

    /*componentDidMount(){

    }*/
    /*static componentWillMount() {
        this.setState(
          {
            movieList: this.props.movieList,
            filteredMovies: this.props.movieList
          }
        );
      }*/

    onSearchClick(){
        /*this.setState({
            query: this.search.value
        })*/
        
        let {query, movieList} = this.state;
        var updatedList = movieList;

        updatedList = updatedList.filter((movie) => {
            Object.keys(movie).filter(key => key !=="image").some(key => movie[key].toLowerCase().indexOf(query.toLowerCase() !== -1));
        })
        /*updatedList = updatedList.filter(function(movie){
            return movie.title.search()
        })*/

        this.setState({filteredMovies: updatedList});
        this.props.onChangeList(this.state.filteredMovies);
    }

    /*onEnterClick(event) {
        var updatedList = movieList; 
        this.props.onChangeList(updatedList);
    }*/

    render() {
        let input = {
            width: "600px",
            padding: "11px 45px",
            backgroundColor: "#424242",
            border: "none",
            marginRight: "10px",
            borderRadius: "3px"
        }

        let filter ={
            width: "768px",
            marginTop: "50px",
            position: "absolute"
        }

        const {title, buttonList} = this.props.filterInfo;
        const {searchButtonText} = this.props;
        return (
            <>
                <div className="uk-search">
                    <input style={input} className="uk-search-field" type="search" placeholder="SEARCH" onChange={event => this.setState({query: event.target.value})}/>
                    <button onClick={this.onSearchClick}>{searchButtonText}</button>
                </div>
                <div style={filter}>
                    <Filter title={title} buttons = {buttonList}/>
                </div>
            </>
        );
    }
}

export default Search