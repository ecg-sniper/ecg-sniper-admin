// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
const mongoose = require('mongoose');

// This section contains the properties of your model, mapped to your collection's properties.
// Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
const schema = mongoose.Schema({
  'content': String,
  'createdAt': Date,
  'seen': Boolean,
  'type': String,
  'updatedAt': Date,
  'user': { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
}, {
  timestamps: false,
});

module.exports = mongoose.model('notifications', schema, 'notifications');
