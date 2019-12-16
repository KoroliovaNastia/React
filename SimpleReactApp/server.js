require('dotenv').config();
const path = require('path');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'

const port = process.env.PORT || 5000;

//const app = express();
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();
    // server.get('/film/:id', (req, res) => {
    //     const rendered = 
    //     const actualPage = '/post';
    //     const queryParams = {id: req.params.id }
    //     app.render(req, res, actualPage, queryParams)
    // })
    server.get('*', (req, res) => {
        // const rendered= renderToString(<Root />)
        // //const output = renderHTML(rendered);
        // res.send(output);
        // res.end();
        res.send()
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if(err){ throw err }
        console.log('> Ready on http://localhost:5000')
    })
}).catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})


// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'src/index.html'));
// });
  
// app.get('/about', (req, res) => {
//     res.send('About page. Nice.');
// });

// app.listen(port, () => {
//     console.log("Server running at %d", port);
// });