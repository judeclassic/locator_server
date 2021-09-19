const { json } = require("express");

module.exports = (app, userModel)=>{
    app.post('/api/update_location', (req, res)=>{
        const {name, location} = req.body;
        
        userModel.findOneAndUpdate(
            {name: name},
            {$set: {
                location: {
                    location: location,
                    date: Date.now()
                },
                    
            }},
            (err, results)=>{
                if (err) console.log(err);
                res.json("updated location");
            }
        );
    });
}