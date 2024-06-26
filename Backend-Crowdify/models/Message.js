// Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    Sender: String,
    Content: String,
    ImageUri: String,
    AudioUri: String,
    latitude: Number,
    longitude:Number,
  });

messageSchema.index({ location: '2dsphere' });
module.exports = mongoose.model('Message', messageSchema);