import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const askChatbot = async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ success: false, error: 'La question est requise.' });
  }

  try {
    const response = await axios.post('https://api.deepseek.com/v1/chat/completions', {
      messages: [
        { role: 'user', content: question }
      ],
      model: 'deepseek-chat',
    }, {
      headers: {
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const answer = response.data.choices[0].message.content;

    res.status(200).json({ success: true, reply: answer });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Erreur du chatbot' });
  }
};
