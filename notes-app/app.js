const log = console.log;
const formatOutput = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');
const { argv } = require('yargs');

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
        notes.addNote(argv.title, argv.body);
        //log(argv.title);
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