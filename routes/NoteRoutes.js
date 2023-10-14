const express=require('express')
const noteModel = require('../models/NotesModel');
const app=express.Router()

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to save the note
    try {
        var newNote = new noteModel({
            ...req.body
        })
        await newNote.save()
        res.status(200).json(newNote)
    }catch (e){
        res.status(500).send("Error occurred while saving note")
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to returns all note
    try{
        var note_list=await noteModel.find()
        res.status(200).json(note_list)
    }catch (e){
        res.status(500).json(e)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to return onlt one note using noteid
    try{
        var noteId=req.params.noteId
        var note_by_id= await noteModel.findById(noteId)
        res.status(200).json(note_by_id)
    }catch (e){
        res.status(500).json(e)
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to update the note using noteid

    try{
        var noteId=req.params.noteId
        var note_by_id_update= await noteModel.findByIdAndUpdate(noteId, req.body)
        res.status(200).json(await noteModel.findById(noteId))
    }catch (e){
        res.send(500).json(e)
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to delete the note using noteid
    try {
        var noteId = req.params.noteId
        var note_id_delete=await noteModel.findOneAndDelete(noteId)
        res.status(201).send(`note with ID ${noteId} deleted`)
    }
    catch (e){
        res.status(500).json(e)
    }
});

module.exports=app;