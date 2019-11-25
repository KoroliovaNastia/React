import React, {Component} from "react";
import Footer from './footer';
import Main from './main';
import Logo from './logo';
import Header from './header';
import Search from './search';
import SearchNavigation from './searchNavigation';
import Box from './box';

class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state ={movieList: this.props.movieList}
    }
    onChangeList(updatedMovies){
        this.setState({movieList: updatedMovies})
    }
    render(){
        const {logo, searchButtonText} = this.props;
        const {searchFilterInfo, navigationFilterInfo} = this.props.filters
        const {movieList} = this.state;
        return(
        <>
            <Header>
                <Logo logo = {logo}/>
                <Search filterInfo={searchFilterInfo} searchButtonText={searchButtonText} movieList={movieList} onChangeList={this.onChangeList.bind(this)}/>
            </Header>
            <Box>
                <p>{movieList.length} movie found</p>
                <SearchNavigation filterInfo={navigationFilterInfo}/>
            </Box>
            <Main movieList={movieList}/>
            <Footer>
                <Box>
                <Logo logo = {logo}/>
                </Box>
            </Footer>
        </>
        )}
}

export default SearchPage