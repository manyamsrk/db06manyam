var Gas = require('../models/gas');
// List of all Gass
exports.gas_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Gas list');
};
// for a specific Gas.
// for a specific Gas.
exports.gas_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Gas.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle Gas create on POST.
exports.gas_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Gas();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gas_type":"regular", "quantity":13, "cost":43.56}
    document.gas_type = req.body.gas_type;
    document.quantity = req.body.quantity;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Gas delete form on DELETE.
exports.gas_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Gas delete DELETE ' + req.params.id);
};
// Handle Gas update form on PUT.
// Handle Gas update form on PUT.
exports.gas_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Gas.findById( req.params.id)
 // Do updates of properties
 if(req.body.gas_type)
 toUpdate.gas_type = req.body.gas_type;
 if(req.body.quantity) toUpdate.quantity = req.body.quantity;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// List of all Gass
exports.gas_list = async function (req, res) {
    try {
        theGas = await Gas.find();
        res.send(theGas);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.gas_view_all_Page = async function (req, res) {
    try {
        theGas = await Gas.find();
        res.render('gas', {
            title: 'Gas Search Results',
            results: theGas
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};