const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    type: { type: String, enum: ['Blood', 'Organ'], required: true },
    bloodGroup: { type: String, required: true },
    requesterName: { type: String, required: true },
    contact: { type: String, required: true },
    location: { type: String, required: true },
    isUrgent: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', DonationSchema);
