const {Authors} = require('./../models/author.model')

module.exports = {

    // all 
    allAuthors : (req,res)=>{
        Authors.find()
            .then(author => res.json(author))
            .catch(err=>res.status(400).json(err))
    },
    // one 
    oneAuthor : (req,res)=>{
        const id = req.params.id
        Authors.findOne({_id:id})
            .then(author => res.json(author))
            .catch(err=>res.status(400).json(err))
    }, 
    // create 
    createAuthor : (req,res)=>{
        Authors.create(req.body)
            .then(response => res.json(response))
            .catch(err=>res.status(400).json(err))
    },
    // update
    updateAuthor : (req,res)=>{
        const id = req.params.id
        Authors.findOneAndUpdate (
            {_id:id}, 
            req.body, 
            {new: true, runValidators:true}
        )
        .then(response => res.json(response))
        .catch(err=>res.status(400).json(err))
    },
    // delete
    deleteAuthor : (req,res)=>{
        Authors.deleteOne ({_id:req.params.id})
            .then(response => res.json(response))
            .catch(err=>res.status(400).json(err))
    }
}