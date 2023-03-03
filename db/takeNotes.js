const fs  = require('fs');
const util = require('util');


const readNotes = util.promisify(fs.readFile);
const writeNotes = util.promisify(fs.writeFile);
const noteId = Math.floor(Math.random() * max);
class takeNotes{
    // 
    read(){
        // Read db.json file for note objects;
        return readNotes('db/db.json','utf8');
    }
    write(note){
        // Write note objects into the db.json file. 
        return writeNotes('db/db.json',JSON.stringify(note));
    }

    getNote(){
        // Check if notes is an array. return blank array if its not else return all the notes concat into one array. 
        let notes;
        if(note.length <1){
           notes = [];
            return notes;  
        }else{
            notes = [].concat(JSON.parse(note)); 

        }return this.read().then(notes)   
    };
    // Push notes into the note array then write the compilled notes.
    pushNote(note){
        const noteAdd = {title,text,id:noteId};
        return this.getNote().then((note)=>[...note,noteAdd]).then((compNotes)=>this.write(compNotes)).then(()=>noteAdd);
    }
    // Identify a note through ID then filter out and write  notes into array. 
    pullNote(id){

        return this.getNote().then((notes)=> notes.filter((note)=>note.id !==id)).then((compNote)=>this.write(compNote));
    }

}

module.exports = new takeNotes();