// console.log(module);
// module.exports.age =25;

// module.exports.add= (a,b) => a+b;
const fs = require('fs');
let notes = [];

let fetchNotes = () => {
    try {
        notes = JSON.parse(fs.readFileSync('notes-data.json'));
        return notes
    } catch (error) {
        return [];
    }
};

let logNotes = (note) => {
    console.log(note);
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {

    notes = fetchNotes();

    let note = {
        title,
        body
    }

    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        console.log('Already Exsists');
    }
};

let getAll = () => {
    return fetchNotes();
}

let getNote = (title) => {
    let note=fetchNotes().filter(((note) => note.title === title));
    if(note.length >0 ){
        console.log(note[0]);
    }
}

let removeNote = (title) => {
    notes=fetchNotes();
    let filterNotes=notes.filter((note) => note.title !== title)
    if(notes.length !== filterNotes.length)
        console.log(`${title} Note Removed Successfully`);
    else
        console.log(`${title} Note does not exsist`);
    saveNotes(filterNotes);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};