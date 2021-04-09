var house = require('../models/house');
// List of all house

exports.house_list = async function(req, res) {
    try{
        thehouse = await house.find();
        res.send(thehouse);
        }
        catch(err){
        res.error(500,`{"error": ${err}}`);
        }
        
res.send('NOT IMPLEMENTED: house list');
};

// for a specific house.
exports.house_detail = async function(req, res) {
        console.log("detail"  + req.params.id)
        try {
            result = await house.findById( req.params.id)
            res.send(result)
        } catch (error) {
            res.status(500)
            res.send(`{"error": document for id ${req.params.id} not found`);
        }
    
res.send('NOT IMPLEMENTED: house detail: ' + req.params.id);
};
// Handle house create on POST.
exports.house_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: house create POST');
};
// Handle house delete form on DELETE.
exports.house_delete = function(req, res) {
res.send('NOT IMPLEMENTED: house delete DELETE ' + req.params.id);
};
// Handle house update form on PUT.
exports.house_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await house.findById( req.params.id)
        // Do updates of properties
        if(req.body.type) toUpdate.type = req.body.type;
        if(req.body.colour) toUpdate.colour = req.body.colour;
        if(req.body.rent) toUpdate.rent = req.body.rent;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

res.send('NOT IMPLEMENTED: house update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.house_view_all_Page = async function(req, res) {
    try{
    thehouse = await house.find();
    res.render('house', { title: 'house Search Results', results: thehouse });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };

    // Handle house create on POST.
exports.house_create_post = async function(req, res) {
    console.log(req.body)
    let document = new house();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.type = req.body.type;
    document.colour = req.body.colour;
    document.rent = req.body.rent;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
    