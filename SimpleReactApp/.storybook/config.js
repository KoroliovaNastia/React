import { configure, addDecorator } from '@storybook/react';
import {withProvider} from './decorators'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
configure(req, module);

function loadStories() {
    req.keys().forEach(filename => req(filename));
  }
  
  configure(loadStories, module);
