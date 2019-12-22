import React from 'react'
import { storiesOf} from '@storybook/react';
import { StyledButton, StyledInput} from '../src/components/search';
import { action } from '@storybook/addon-actions';

const Search = () => 
<>
    <StyledInput type="search" placeholder="SEARCH" className="search-field" value={"input"} />
    <StyledButton type="button" className="search-button" data-cy="search" onClick={action('clicked')}>
        SEARCH
    </StyledButton>
</>

storiesOf('Search', module)
.add('default', () => <Search/>)
.addParameters({query: "input"})