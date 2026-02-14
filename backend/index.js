// Import dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Loads API keys from the .env file
dotenv.config();

// Creates server application and runs it on port 3000
const app = express();
const PORT = 3000;

// Lets frontend (on a different port) talk to backend
app.use(cors());
// Lets server understand JSON data that is sent to it
app.use(express.json());

// Test route - get a msg back saying the API works
app.get('/', (req, res) => {
    res.json({message: 'Korean Translator API is running'})
})

// Starts server and prints msg in terminal -- running
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});