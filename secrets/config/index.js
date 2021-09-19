const name = "the_start_up";

const dbPassword = "SvfB6G9fNZY70DsD";
// `mongodb://localhost:27017/${name}`

exports.name  = name;
exports.PORT =  process.env.PORT || 9080;
exports.dbUrl  = `mongodb+srv://TestMan:${dbPassword}@cluster0.pbl0w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;