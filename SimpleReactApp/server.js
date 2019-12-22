import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import Express from 'express';
import {
  StaticRouter, matchPath, Switch, Route,
} from 'react-router-dom';
import { configureStore } from './src/redux/store';
import Routes from './src/components/routes';
import SearchPage from './src/components/searchPage';
import DescriptionPage from './src/components/descriptionPage';

const port = process.env.PORT || 5000;

const app = Express();

function renderRoot(store, context, location, route) {
  const html = renderToString(

    <Provider store={store}>
      <StaticRouter context={context} location={location}>
        <Switch>
          <Route path="/movies" component={SearchPage} />
          <Route path="http://localhost:5000/film/:id" component={DescriptionPage} />
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
            </head>
            <body>
                <div id="root">${html}</div>
                <script>
                    window.PRELOADED_STATE=${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/dist/bundle.js"></script>
            </body>
        </html>
    `;
}

app.use('/dist', Express.static('dist'));
app.get('*', (req, res) => {
  const currentRoute = Routes.find((route) => matchPath(req.url, route)) || {};
  const context = {};

  const store = configureStore();
  console.log(context);
  const html = renderRoot(store, context, req.url, currentRoute);

  if (context.url) {
    return res.redirect(301, { Location: context.url });
  }else{
    const preloadedState = store.getState();
    return res.send(renderFullPage(html, preloadedState));
  }
});
//app.get('/movies*', (req, res) => {});
//app.get('/film/*', (req, res) => {});

app.listen(port, () => {
  console.log('Server running at %d', port);
});
