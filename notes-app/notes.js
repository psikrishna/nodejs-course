const fs = require('fs');
const chalk = require('chalk');
const log = console.log;
const getNotes = () => { return 'your notes...' }

//function to  add notes

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        log(chalk.green.inverse('new note added'));
    }
    else {
        log(chalk.red.inverse('title already taken'));
    }
}

//function to save notes

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.JSON', dataJSON);
}

//function to load notes

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.JSON');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }
}

//function to remove notes

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notesToKeep.length === notes.length) {
        log(chalk.red.inverse('note not found'));
    }
    else {
        log(chalk.green.inverse('note removed'));
        saveNotes(notesToKeep);
    }
}

//function to list notes

const listNotes = () => {
    log(chalk.blue.inverse('your notes:'));
    const notes = loadNotes();
    notes.forEach((note) => {
        log(note.title);
    })
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
}