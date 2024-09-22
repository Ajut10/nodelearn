const fs = require('fs');

const readstream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');
// readstream.on('data', (chunk)=>{
//     console.log("-------New Chunk------------------------");
//     console.log(chunk);
//     writeStream.write("\nNew Chunk\n");
//     writeStream.write(chunk);
// }
// );
readstream.pipe(writeStream);