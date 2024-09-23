const express = require('express');
// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');


//listen for requests
app.listen(3000);
app.get('/', (req, res)=>{
    const blogs =[{

        title : "He said" ,snippet:"Lorem ipsum dolor sit amet consectetur adipisicing elit" 
    },{
        title : "She said" ,snippet:"Lorem ipsum dolor sit amet consectetur adipisicing elit"    
    },{
        title : "We said" ,snippet:"Lorem ipsum dolor sit amet consectetur adipisicing elit" 
    }
]
   
    res.render('index',{ title : 'Home',blogs});
});
app.get('/about', (req, res)=>{
    res.render('about', { title : 'About'});
    // res.send('<p>about page</p>');
});

app.get('/about-us',(req, res)=>{
    res.render('/about',{ title : 'About'});
});
app.get('/blogs/create', (req, res)=>{
    res.render('create', { title : 'Create a new blog'});
});

app.use((req,res)=>{
    res.render('404',{title: 'Page not found'});
})