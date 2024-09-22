const fs = require('fs');

// reading files
// fs.readFile('./docs/blog12.txt',(err,data)=>{
//     if(err){
//         console.error(err);
//     }
//         console.log(data.toString());
    

// });

// console.log("last line");

//writing files
// fs.writeFile('./docs/blog.txt',"hello world",(err)=>{
//     if(err){ console.log(err); }
//     console.log("done");
// })
// console.log("lastline");

// fs.writeFile('./docs/blog2.txt',"hello world",(err)=>{
//     if(err){ console.log(err); }
//     console.log("done2");
// })
// console.log("lastline1");

// directories
if(!fs.existsSync('./assets')){

    fs.mkdir('./assets',(err)=>{
        if(err){ console.log(err);}
            console.log("folder created");
    });
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){ console.log(err);}
        console.log("folder deleted");
    })
};

//delete files
if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt',(err)=>{
        if(err){ console.log(err);}
        console.log("file deleted")
    })
}

