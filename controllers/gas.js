var Gas = require('../models/gas');
// List of all Gass
exports.gas_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Gas list');
};
// for a specific Gas.
exports.gas_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Gas detail: ' + req.params.id);
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
exports.gas_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Gas update PUT' + req.params.id);
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