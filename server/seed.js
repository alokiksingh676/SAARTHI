require('dotenv').config();
const mongoose = require('mongoose');
const Scheme = require('./models/Scheme');

const initialSchemes = [
    {
        title: "Ayushman Bharat (PM-JAY)",
        description: "The world's largest health insurance scheme fully financed by the government.",
        benefits: "Provides a cover of Rs. 5 lakhs per family per year for secondary and tertiary care hospitalization.",
        eligibility: "Low-income families identified by the SECC 2011 data.",
        applyLink: "https://pmjay.gov.in/"
    },
    {
        title: "Central Government Health Scheme (CGHS)",
        description: "Comprehensive medical facilities for Central Government employees and pensioners.",
        benefits: "Covers OPD treatment, specialist consultation, and hospitalization at government and empanelled hospitals.",
        eligibility: "Central Government employees, pensioners, and their dependents.",
        applyLink: "https://cghs.nic.in/"
    },
    {
        title: "Janani Suraksha Yojana (JSY)",
        description: "A safe motherhood intervention under the National Health Mission.",
        benefits: "Cash assistance for institutional delivery to reduce maternal and neonatal mortality.",
        eligibility: "Pregnant women from BPL/SC/ST households in all states.",
        applyLink: "https://nhm.gov.in/"
    }
];

async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB for seeding...");
        
        await Scheme.deleteMany({}); // Clear existing schemes
        await Scheme.insertMany(initialSchemes);
        
        console.log("Database Seeded Successfully!");
        process.exit();
    } catch (err) {
        console.error("Seeding Error:", err);
        process.exit(1);
    }
}

seedDB();
