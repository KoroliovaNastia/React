import React from 'react';
import headerImage from '../images/header-image.jpg';

// const  searchStyle = {
//     minWidth: "1200px",
//     backgroundImage: 'url('+ headerImage +')',
//     backgroundColor: '#2323237f' 
// };

const Header = ({children}) => (
    <div uk-img="true">
        {children}
    </div>
)

export default Header