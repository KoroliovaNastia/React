import React from 'react';
import { Provider, connect } from 'react-redux';
import { renderToString } from 'react-dom/server';
import Express from 'express';
import {
  StaticRouter, matchPath, Switch, Route,
} from 'react-router-dom';
import { configureStore } from './src/redux/store';
import routes from './src/components/routes';
import SearchPage from './src/components/searchPage';
import DescriptionPage from './src/components/descriptionPage';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { updateMovies, setMovie } from './src/redux/actions/index';

const port = process.env.PORT || 5000;

const app = Express();

const initialMovieState = {
  movieState:{
    movieList: null,
    movie: null,
  }
};

function renderRoot(store, context, location) {
  const html = renderToString(

     <Provider store={store}>
       <StaticRouter context={context} location={location}>
         <Switch>
          {renderRoutes(routes)}
         </Switch>
       </StaticRouter>
     </Provider>,
  );
  return html;
}

function renderFullPage(html, preloadedState) {
  return `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
                integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                <title>React Application</title>
                <!--<script src="/dist/bundle.js" defer></script>-->
            </head>
            <body>
                <div id="root">${html}</div>
                <script>
                    window.PRELOADED_STATE=${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
            </body>
        </html>
    `;
}
app.use('/dist', Express.static('dist'));
app.use('/images', Express.static('images'));

app.get('*', (req, res) => {

  console.log(req.url)
   const route = routes.find((route) => matchPath(req.url, route)) || {};
   const newData = route.loadData(req.url)

   Promise.all([newData]).then((result)=>{
    const data = result[0];
    const store = configureStore();
    store.dispatch(updateMovies(result[0]['movieList']))
    store.dispatch(setMovie(result[0]['movie']))
    const context = {};
    const preloadedState = store.getState();
    const content = renderRoot(store, context, req.url);

    res.send(renderFullPage(content, preloadedState));
   })
});

app.listen(port, () => {
  console.log('Server running at %d', port);
});
