const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

//GET ALL
router.get('/', async (req,res) =>{
    try {
        const items = await Item.find();
        res.json(items);
    } catch(err) {
        res.json({ message:err })
    }
});

//SUBMIT
router.post('/', async (req,res) => {
     console.log(req.body);
     const item = new Item({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        //type: this.state.personal
    });  
    try {
        const savedItem = await item.save();
        res.json(savedItem);
    } catch (err) {
        res.json({ message: err });
    }
});

//GET A SPECIFIC 
router.get('/:itemId', async (req,res) => {
    //console.log(req.params.itemId);
    try {
        const post = await Post.findById(req.params.itemId);
        res.json(post);
    }catch(err){
        res.json({ message:err })
    }
});

//DELETE 
router.delete('/:itemId', async (req,res) => {
       try {
            const removedItem = await Item.remove({ _id: req.params.itemId });
            res.json(removedItem);
        }catch(err){
            res.json({ message:err })
        }
});    
    
//UPDATE
router.patch('/:itemId', async (req,res) => {
    try {
        const updatedItem = await Item.updateOne(
            { _id: req.params.itemId }, 
            { $set: {title: req.body.title} }
        );
        res.json(updatedPost);
    }catch(err){
        res.json({ message:err })
    }
})

module.exports = router;