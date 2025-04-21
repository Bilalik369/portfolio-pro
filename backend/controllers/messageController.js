import Message from "../models/Message.js";



export const sendMessage = async (req , res) =>{
    
    const {name , email ,message} = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: 'Tous les champs sont requis : nom, email et message.',
        });
      }
    
      try{
        const newMessage = new Message ({name , email , message});
        await newMessage.save();
        res.status(201).json({ success : true ,  message: 'Message envoyé avec succès !'});

      }catch (err){
        res.status(500).json({ success: false, error: 'Échec de l\'envoi du message.' });
      }
        
    
};