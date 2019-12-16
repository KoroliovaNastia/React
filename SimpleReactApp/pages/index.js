import React, {Component} from 'react'
import {renderToString} from 'react-dom/server'
import Root from "../src/components/root";
import {hydrate} from 'react-dom'
import {store, persistor} from "../src/redux/store";
import {Provider} from "react-redux";

const rendered = renderToString(<Provider store={store}><Root/></Provider>)

const Index = () => 
    
    // <!DOCTYPE html>
    // <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css" />
    //         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    //         <title>React Application</title>
    //     </head>
        <body>
            <div id="root">{rendered}</div>
        </body>
    //</html>
    
export default Index