import express from 'express';
import { createUser } from './controllers/createController.js';

const router = express.Router();

router.post('/register', createUser); // Route to create a new user

export default router;
