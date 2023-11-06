const mongoose = require("mongoose");

// CONNECTION_STRING=valami    tartalmazza a connection stringet
// ez a fejlesztés során .env file-ban volt, amit nem töltöttem fel GitHubra,
const connectMongoDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Adatbázis: ${connect.connection.name}`,
            `(host: ${connect.connection.host})`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectMongoDb;