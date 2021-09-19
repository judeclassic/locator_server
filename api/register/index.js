
module.exports = (app, model)=>{

    app.post('/api/register', (req, res)=>{
        var driverModel = new model({
            name: req.body.name,
        });

        driverModel.save()
        .then((result)=>{
            res.json("registered successfully");
        })
        .catch((err)=>{
            res.json(`Error: ${err}`);
        });
    })
}