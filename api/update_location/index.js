
module.exports = (app, userModel)=>{
    app.post('/api/update_location', (req, res)=>{
        const {name, location} = req.body;
        
        userModel.findOneAndUpdate(
            {name: name},
            {$set: {
                location: location,
            }},
            (results)=>{
                res.json("updated location");
            }
        );
    });
}