const mongoose = require("mongoose");
//const kerdoivSchema = new mongoose.Schema({name: String},{timestamps:true});
const kerdoivSchema = new mongoose.Schema(
    {
       minoseg: { type: Number, required: [true, "A minőség megadása szükséges"] },
       gyorsasag: { type: Number, required: [true, "A gyorsaság megadása szükséges"] },
       ar: { type: Number, required: [true, "Az ár megadása szükséges"] },
       ip: { type: String, required: [true, "A szavazó IP-címe szükséges"]}
    },
    {timestamps: true}
);
module.exports = mongoose.model("Kerdoiv", kerdoivSchema);