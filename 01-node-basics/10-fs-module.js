const {readFileSync,writeFileSync}=require('fs');
// const fs=require('fs'); same thing if i use fs.read

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

// console.log(first,second)

// completely updates the file
// writeFileSync('./content/result-sync.txt',`here is the result ${first},${second}`)

// this appends to the file instaed of removving the previous text it adds to it 
writeFileSync('./content/result-sync.txt',`here is the result ${first},${second}`,{flag:'a'})