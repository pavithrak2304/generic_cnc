const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const listschema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true, unique: true },
    token: {type: String, required: true},
    status: { type: String, enum: ['active', 'inactive'], default: 'active' }
});

const demo = mongoose.model('users', listschema); 
