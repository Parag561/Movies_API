const mongoose = require("mongoose");
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost/Movie', { useNewUrlParser: true });
    console.log("Connected successfully");
}