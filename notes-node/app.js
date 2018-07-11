const fs = require('fs');
// const os =require('os');
const _ = require('lodash');
const yargs= require('yargs');
const notes = require('./notes');
const argv = yargs.argv;
let command = argv._[0];


if (command === 'add') {
    console.log('Adding new Notes');
    let note=notes.addNote(argv.title,argv.body)
    if(note){
        console.log(note.title,note.body)
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    console.log('read');
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not Found');
}