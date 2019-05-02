var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abby:<spartacus666.>@cintanegra-p0tig.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
const mongo = mongoose.connection;

mongo.on("error", (error) => console.log("Failed to connect to mongo", error))
	.once("open", () => console.log("Connected to database"));

module.exports = mongo;



