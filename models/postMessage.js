import mongoose from "mongoose";

const postSchema=mongoose.Schema({
//provides unifoemity in data base that each post must have this things
title: String,
message: String,
creator: String,
tags:[String],
selectedFile:String,
likeCount:{
    type:Number,
    default:0
},
createdAt:{
    type:Date,
    default: new Date()
}

});
//creating a mongoose model in the post message file on that model we will run commands find, create, add, delete,
const PostMessage =mongoose.model('PostMessage',postSchema);
//we will acess schema using this variable PostMessage
export default PostMessage;