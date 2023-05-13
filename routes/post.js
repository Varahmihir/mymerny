import express, { Router } from 'express';

import { getPost,createPost } from '../controllers/post.js';
const router =express.Router();


// not reached att localhost:5000 but at http://localhost:5000/post
router.get('/',getPost);
router.post('/',createPost);

// to seperate logic from all the route request we will put all logic inside controller folder
export default router;
