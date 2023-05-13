import PostMessage from "../models/postMessage.js";



// all the functions will be executed hear
export const getPost =async(req,res)=>{
    try {
        //when i added await the i must label th function first as async
        //await is added to make it synchronous as finding is a time takeing proocess
        const postMessages= await PostMessage.find();
    //all arrray console.log(postMessages) so we will return res.status(200) sys every thing is fine
        res.status(200).json(postMessages);

    } catch (error) {
        //status(404) for error
        res.status(404).json({message: error.message});
        
    }
}

export const createPost =async(req,res)=>{
    const post =req.body;
    
    const newPost =new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({messge:error.message});
    }
}