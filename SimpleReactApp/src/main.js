import React, { Component} from "react";
import DefaultImage from './images/movie-default.jpg'

class Main extends Component {
    constructor() {
        super();
        this.state = {items: [{id: '1', image: DefaultImage, title:'Soon...', genre:'Drama', releaseDate:'2020'}, 
                                {id: '2', image: DefaultImage, title:'Soon...', genre:'Drama', releaseDate:'2020'},
                                 {id: '3', image: DefaultImage, title:'Soon...', genre:'Drama', releaseDate:'2020'}]}
    }
    render() {
        return (
        <div class="container">
            <div class="uk-grid-column-small uk-child-width-1-3@s uk-text-center" uk-grid="true">
                {this.state.items.map((item)=> <Item key={item.id} item={item}/>)}
            </div>
        </div>
        );
    }
}

class Item extends Component {
    render(){
        return (
            <div class='item'>
                <Image image={this.props.item.image} />
                <MetadataBox>
                    <Title title={this.props.item.title} />
                    <Genre releaseDate={this.props.item.genre} />
                </MetadataBox>
                <MetadataBox>
                    <ReleaseDate releaseDate={this.props.item.releaseDate} />
                </MetadataBox>
            </div>
        );
    }
}

const Image = ({image}) => (
    <img src={image}></img>
);

var metadataStyle = {
    position: 'relative'
}

const MetadataBox = () =>  (<div style={metadataStyle}></div>)

const Genre = ({genre}) => (<p>{genre}</p>)

const ReleaseDate = ({releaseDate}) => (<p>{releaseDate}</p>)

const Title = ({title}) => (<p>{title}</p>)

export default Main