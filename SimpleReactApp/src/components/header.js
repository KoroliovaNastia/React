import React from 'react';
//import headerImage from '../images/header-image.jpg';

const  searchStyle = {
    minWidth: "1200px",
    //backgroundImage: 'url('+ headerImage +')',
    backgroundImage: 'url(../images/header-image.jpg)',
    backgroundColor: '#2323237f' 
};

const Header = ({children}) => (
    <div className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={searchStyle} uk-img="true">
        {children}
    </div>
)

export default Header