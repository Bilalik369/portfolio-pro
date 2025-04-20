const mongoose = require("mongoose");


const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB connecté");
    }catch (err){
        console.error('Erreur de connexion à MongoDB:', err);
        process.exit(1);

    }
};

module.exports = connectDb;

