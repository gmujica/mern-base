const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET ALL
router.get('/', async (req,res) =>{
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({ message:err })
    }
});

//SUBMIT
router.post('/', async (req,res) => {
     console.log(req.body);
     const post = new Post({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });  
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//GET A SPECIFIC 
router.get('/:postId', async (req,res) => {
    //console.log(req.params.postId);
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({ message:err })
    }
});

//DELETE 
router.delete('/:postId', async (req,res) => {
       try {
            const removedPost = await Post.remove({ _id: req.params.postId });
            res.json(removedPost);
        }catch(err){
            res.json({ message:err })
        }
});    
    
//UPDATE
router.patch('/:postId', async (req,res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: {title: req.body.title} }
        );
        res.json(updatedPost);
    }catch(err){
        res.json({ message:err })
    }
})

module.exports = router;