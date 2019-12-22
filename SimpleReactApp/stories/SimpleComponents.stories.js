import React from 'react'

import Logo from '../src/components/logo';
import { storiesOf } from '@storybook/react';
import {configureStore} from '../src/redux/store';
import Image from '../src/components/image';
import image from '../src/images/file.jpg';

const store = configureStore();

storiesOf('Logo', module)
.add('default', () => <Logo store={store}/> )

storiesOf('Image', module)
.add('default', () => <Image image={image}/>)