import React from 'react'
import {createUseStyles} from 'react-jss'

var logoStyle = createUseStyles({
    logo:{
        color: '#f65261',
        paddingTop: '16px',
        fontSize: '20px',
        '& span': {
            fontFamily:'Arial Black'
        }
    }
});

export const LogoText = () => (
    <p className={logoStyle}>
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