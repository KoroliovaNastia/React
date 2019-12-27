import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import styled, { ServerStyleSheet } from 'styled-components';
import Express from 'express';
import {
  StaticRouter, matchPath, Switch,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { configureStore } from './src/redux/store';
import routes from './src/components/routes';
import { updateMovies, setMovie } from './src/redux/actions/index';

const port = process.env.PORT || 5050;

const app = Express();

const Body = styled.div`
  background-color: #232323;
  color: #FFF;
`;

function renderRoot(store, context, location) {
  const sheet = new ServerStyleSheet();
  const html = renderToString(sheet.collectStyles(
    <Provider store={store}>
      <Body>
        <StaticRouter context={context} location={location}>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </StaticRouter>
      </Body>
    </Provider>,
  ));
  const styles = sheet.getStyleTags();
  return { html, styles };
}

function renderFullPage(content, preloadedState, location) {
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
                ${content.styles}
            </head>
            <body>
                <div id="root">${content.html}</div>
                <script>
                    window.PRELOADED_STATE=${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                    window.URL_PATH="${location}"
                </script>
                <script src="/dist/bundle.js"></script>
            </body>
        </html>
    `;
}
app.use('/dist', Express.static('dist'));
app.use('/images', Express.static('images'));
app.get('/favicon.ico', (req, res) => res.status(204));

app.get('*', (req, res) => {
  console.log(req.url);
  const currentRoute = routes.find((route) => matchPath(req.url, route)) || {};
  console.log(currentRoute);
  const newData = currentRoute.loadData(req.url);

  Promise.all([newData]).then((result) => {
    const data = result[0];
    const store = configureStore();
    store.dispatch(updateMovies(data.movieList));
    store.dispatch(setMovie(data.movie));
    const context = {};
    const preloadedState = store.getState();
    console.log(preloadedState);
    const content = renderRoot(store, context, req.url);
    if (context.url) {
      res.redirect(302, context.url);
    }
    res.send(renderFullPage(content, preloadedState, req.url));
  });
});

app.listen(port, () => {
  console.log('Server running at %d', port);
});
