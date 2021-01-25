'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
})

module.exports = mongoose.model('Project', ProjectSchema);  //(Nombre , Schema)
// mongoose coge el nombre y lo pasa a plural y en minúsculas --> colección projects
