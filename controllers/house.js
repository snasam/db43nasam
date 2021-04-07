var house = require('../models/house');
// List of all house
exports.house_list = function(req, res) {
res.send('NOT IMPLEMENTED: house list');
};
// for a specific house.
exports.house_detail = function(req, res) {
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
exports.house_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: house update PUT' + req.params.id);
};