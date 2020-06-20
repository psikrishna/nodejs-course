const log =console.log;
const formatOutput=require('chalk');
const getNotes=require('./notes');
const command=process.argv[2];
// log(formatOutput.inverse.bold.green(' dodo '));
// log(process.argv[2]);
if(command==='add'){
    log('Adding Note');
}
else if(command==='remove'){
    log('Removing Note');
}
else{
    log('ripe dodo');
}
log(process.argv)