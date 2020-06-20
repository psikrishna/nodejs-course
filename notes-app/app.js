const log = console.log;
const formatOutput = require('chalk');
const getNotes = require('./notes');
const yargs = require('yargs');
const { describe, argv } = require('yargs');
//const command=process.argv[2];

//========================================

//formatting the output in cli

// log(formatOutput.inverse.bold.green(' dodo '));
// log(process.argv[2]);

//========================================

//basic user input cli

// if(command==='add'){
//     log('Adding Note');
// }
// else if(command==='remove'){
//     log('Removing Note');
// }
// else{
//     log('ripe dodo');
// }

// log(process.argv);
// log(yargs.argv);

//========================================

//add,remove,read and list notes

//create add command

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function () {
        log('note title: ' + argv.title);
        log('note body : ' + argv.body);
    },
});

//create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        log('removing the note');
    },
});

//create list command

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: function () {
        log('listing the notes');
    },
});

//create read command

yargs.command({
    command: 'read',
    describe: 'reading the notes',
    handler: function () {
        log('reading the note');
    },
});

yargs.parse();
//log(yargs.argv);