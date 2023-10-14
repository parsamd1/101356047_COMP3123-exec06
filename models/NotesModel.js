const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

var notes_schema=mongoose.Schema({
    note_title: String,
    note_description:String,
    priority: {
        type:String,
        enum:['HIGH','MEDIUM', 'LOW']
    },
    date_added:Date,
    date_updated:Date
})

module.exports=mongoose.model('note', notes_schema)