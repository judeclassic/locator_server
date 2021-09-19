const finder = require('@lib/finder');

module.exports = (app, userModel)=>{
    app.post('/api/check_location', (req, res)=>{
        const {name, location} = req.body;
        userModel.findOne(
            {name: name},
            (result)=>{
                res.status(result);
            }
        )
    })
}