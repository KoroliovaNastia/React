import React from 'react'

var logoStyle = {
    color: '#f65261',
    paddingTop: '16px',
    fontSize: '20px',
    span: {
        fontFamily:'Arial Black'
    }
};

export const LogoText = () => (
    <p style={logoStyle}>
      <span>netflix</span>roulete
    </p>
);

export const Button = () => (
    <button class="uk-button" type="reset">Serach</button>
);

export const FuilterButton = ({checked, value}) => (
    <label class="btn">
        <input type="button" value={value} checked={checked}/>
    </label>
);