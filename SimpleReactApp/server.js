import React from "react";
import Root from "../src/components/root";
import {store, persistor} from "./redux/store";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

require('dotenv').config();
const path = require('path');
const express = require('express');
const port = process.env.PORT || 5000;

const app = express();
app.use('/dist', express.static('dist'));
app.use(handleRender)

function handleRender(req, res) {
    const html = renderToString(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <Root />
            </PersistGate>
        </Provider>
    )

    const preloadedState = store.getState()
    res.send(renderFullPage(html, preloadedState))
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
                    window.__PRELOADED_STATE__=${JSON.stringify(preloadedState).replace(
                        /</g,
                        '\\u003c'
                    )}
                </script>
                <script src="/dist/bundle.js"></script>
            </body>
        </html>
    `
}


app.listen(port, () => {
    console.log("Server running at %d", port);
});