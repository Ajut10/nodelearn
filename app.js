const express = require('express');
// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');


//listen for requests
app.listen(3000);
app.get('/', (req, res)=>{
    // res.send('<p>Welcome</p>');
    res.sendFile('./views/index.html',{root:__dirname});
});
app.get('/about', (req, res)=>{
    res.sendFile('./views/about.html',{root:__dirname});
    // res.send('<p>about page</p>');
});

app.get('/about-us',(req, res)=>{
    res.redirect('/about');
});

app.use((req,res)=>{
    res.sendfile('./views/404.html',{root: __dirname});
})