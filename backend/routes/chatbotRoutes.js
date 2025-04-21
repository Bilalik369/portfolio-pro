import express from 'express';
import { askChatbot } from '../controllers/chatbotController.js';
const router = express.Router();

router.post('/', askChatbot);

export default router;
