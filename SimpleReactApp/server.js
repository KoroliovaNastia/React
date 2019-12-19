import React from "react";
import Root from "./src/components/root";
import {configureStore} from "./src/redux/store";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { renderToString } from 'react-dom/server';
import {renderToStringAsync} from 'react-async-ssr'
import Express from 'express';
import {createStore} from 'redux';
import {StaticRouter} from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import {routes} from "./src/components/routes";

const port = process.env.PORT || 5000;

const app = Express();
app.use('/dist', Express.static('dist'));
app.use(handleRender)

function handleRender(req, res) {
    const params = req.params[0].split('/');
    const id = params[2];
    const context = {};
    const store = configureStore();

    const promises = [];
    routes.some(route => {
        const match = matchRoutes(req.path, route);
        if(match) promises.push(route.l)
    })
    //const routes = matchRoutes(routes, req.path);

    const html = renderRoot(store, context, req.url)
    console.log(context)

    if(context.url){
        return res.redirect(301, context.url);
    }else{
        const preloadedState = store.getState()
        console.log(html)
        res.send(renderFullPage(html, preloadedState))
    }
        
}

/*async*/ function renderRoot(store, context, location){
    //const html =await renderToStringAsync(
        const html = renderToString(
            <Provider store={store}>
                <Root context={context} location={location} Router={StaticRouter}/>
            </Provider>
        )
        return html;
}

function renderFullPage(html, preloadedState){
    return `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
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
    `
}


app.listen(port, () => {
    console.log("Server running at %d", port);
});