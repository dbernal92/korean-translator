// 1. IMPORTS
import express from 'express';
import multer from 'multer';
import fs from 'fs';
import dotenv from 'dotenv';

// 2. CONFIGURATION
// Reads .env file and makes the API key available to use
dotenv.config();

// 3. SETUP CONSTANTS
// Section of server that handles transcription-related requests
const router = express.Router();
// Temporarily saves uploaded files in 'uploads' folder
const upload = multer({ dest: 'uploads/'});
// Grabs API key from environment variables
const apiKey = process.env.ASSEMBLYAI_API_KEY;

// 4. ROUTES
router.post('/', upload.single('audio'), async(req, res) => {

})

// 5. EXPORT
// Makes router available to other files
export default router;