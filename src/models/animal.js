const mongoose = require("mongoose"); 
const animalShema = mongoose.Schema({
    nombre:{
        type:String,
        require:true,
    },
    edad:{
        type:Number,
        require:true,
    },
    tipo: {
        type:String,
        require:true,
    },
    fecha: {
        type:Date,
        require:true,
    }
});
module.exports = mongoose.model("Animal", animalShema);