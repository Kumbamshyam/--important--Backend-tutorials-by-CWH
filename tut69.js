const express = require('express');

const app = express();
const port = 80;


// for serving the static file
app.use('/static', express.static('static'));

// set the template engine as pug
app.set('view engine', 'pug');

// set the view directory
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    res.send('You opened home page with shyam ');
});


app.get('/about', (req, res)=>{
    res.send('You opened about page');
});

app.listen(port, ()=>{
    console.log(`this application is started successfully on port ${port} `)
})