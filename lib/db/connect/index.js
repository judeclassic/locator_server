
module.exports = (mongoose, config)=>{
    try{
        mongoose.connect(config.dbUrl, 
            {
                useCreateIndex: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
                useNewUrlParser: true
            });
        mongoose.connection.once('open', (err)=>{
            if (err) throw err;
            console.log(`${config.name} database connected successfully`);
        })
    }catch(err){
        console.log(`Error: ${err}`);
    }
}