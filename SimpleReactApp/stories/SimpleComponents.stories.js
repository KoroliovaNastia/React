import React from 'react'

import Logo from '../src/components/logo';
import { storiesOf } from '@storybook/react';
import {configureStore} from '../src/redux/store';
import Image from '../src/components/image';
import image from '../src/images/file.jpg';
import SearchIcon from '../src/components/searchIcon';

const store = configureStore();

storiesOf('Logo', module)
.add('default', () => <Logo store={store}/> )

storiesOf('Image', module)
.add('default', () => <Image image={image}/>)

storiesOf('Search Icon', module)
.add('default', () => <SearchIcon to="/newPage"/>)