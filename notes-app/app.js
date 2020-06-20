const log = console.log;
const formatOutput = require('chalk');
const notes = require('./notes');
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
    handler(argv) {
        notes.addNote(argv.title, argv.body);
        //log(argv.title);
    },
});

//create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

//create list command

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler() {
        notes.listNotes();
    },
});

//create read command

yargs.command({
    command: 'read',
    describe: 'reading the notes',
    builder: {
        title: {
            describe: 'note title',
            type: 'string',
            demandOption: true,
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    },
});

//create update command

yargs.command({
    command: 'update',
    describe: 'update contents of a pre-exisiting note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'note body',
            type: 'string',
        },
        updateTitle: {
            describe: 'update the title of a pre-existing note',
            type: 'string',
        },
        updateBody: {
            describe: 'update the body of a pre-existing note',
            type: 'string',
        },
    },
    handler: function (argv) {
        notes.updateNote(argv.title, argv.updateTitle, argv.updateBody);
    },
})

yargs.parse();
//log(yargs.argv);