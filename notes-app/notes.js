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

//function to remove notes

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    });
    if(notesToKeep.length===notes.length){
        log('note not found');
    }
    else{
        log('note removed');
    }
    saveNotes(notesToKeep);
}

//function to update note

const updateNote = function (title, updatedTitle, updatedBody) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        log(note.title);
        if (note.title === title) {
            note.title = updatedTitle;
            note.body = updatedBody;
        }
        return note.title === title;
    });
    if (duplicateNotes.length === 0) {
        log('note does not exist');
    }
    else {
        // log(notes.title);
        // log("ABC");
        // notes.title = updatedTitle;
        // notes.body = updatedBody;
        // log(notes.title);
        saveNotes(notes);
        log('note updated');
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    //updateNote: updateNote,
}