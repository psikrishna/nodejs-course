const fs = require('fs');
const log = console.log;
const getNotes = function () {
    return 'your notes...';
}

//function to  add notes

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        log('new note added');
    }
    else {
        log('title already taken');
    }
}

//function to save notes

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.JSON', dataJSON);
}

//function to load notes

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.JSON');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
}