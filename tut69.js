const express = require('express');
const app = express();
const port = 80;
const fs = require('fs');
const path = require('path');

// <---------- EXPRESS SPECIGIC STAFF ------------>
// 01. using static function from express to send static files
app.use('/staticfoldername', express.static('static'));// for serving the static file

// 02. using urlencoded function from express to get data from form
app.use(express.urlencoded());










// <---------- PUG SPECIGIC STAFF ------------>
// 01. add view engine of pug
app.set('view engine', 'pug'); // set the template engine as pug

// 02. add directory from path module
app.set('views', path.join(__dirname, 'views')) // set the view directory











// <---------- ENDPOINTS SPECIGIC STAFF ------------>
app.get('/', (req, res) => {
    // const con = "This is the best content on the internet";
    // const params = { "title": "pubg is the best game", "content": content is deliverd };
    res.status(200).render('index.pug');
    res.status(200).send('hello guys this is working');
});

app.post('/', (req, res)=>{
    let name = req.body.name;
    let address = req.body.address;
    let gender = req.body.gender;
    let age = req.body.age;
    let more = req.body.more;

    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}, more about him/her ${more}`;
    fs.writeFileSync('output.txt', outputToWrite);
    const params = { "message": "Your form has been submitted successfully"};
    res.status(200).render('index.pug');
})








// <---------- START THE SERVER ------------>
app.listen(port, () => {
    console.log(`this application is started successfully on port ${port} `)
})