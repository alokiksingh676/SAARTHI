# Saarthi 🧭✨
### *Your AI-Powered Healthcare Guide & Empathetic Anchor*

[![Node.js](https://img.shields.io/badge/Node.js-v16%2B-blue?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Ollama](https://img.shields.io/badge/AI%20Engine-Ollama%20(Llama3)-orange?style=flat-square)](https://ollama.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-lightgrey.svg?style=flat-square)](https://opensource.org/licenses/ISC)

> **"Saarthi"** (Sanskrit for *Charioteer* or *Guide*) is an empathetic healthcare companion and medical resource platform designed to navigate users through the often-stressful, complex healthcare landscape. 
> 
> Rather than a cold, clinical dashboard, **Saarthi** acts as a calming sanctuary—reimagining medical UI through an **Editorial Sanctuary** aesthetic that replaces rigid boundaries with soft depth, clean typography, and a steady, reassuring tone.

---

## 🌟 The Core Vision: The Empathetic Anchor
In high-stakes medical situations, anxiety is the default state. Saarthi is built to alleviate this anxiety by embodying **The Empathetic Anchor** design philosophy:
- **No-Line Rule:** Rejects traditional harsh grid lines in favor of organic tonal layering (`#f7f9fb` to `#eceef0`) to minimize visual claustrophobia.
- **Editorial Voice:** Leverages **Public Sans** typography for premium legibility, rendering information with magazine-like elegance.
- **Tactile Responses:** Features soft, interactive elements, calming color hierarchies (Trust Anchor Blue, Vitality Green, Calm Teal), and glassmorphism (backdrop blurs on modals and floating elements) to create a reassuring, modern experience.

---

## 🚀 Key Features

### 💬 1. Saarthi AI Chat Assistant
- **Empathetic Guide:** An AI companion connected to a **locally run LLM (via Ollama)** that provides supportive, clear guidelines.
- **Context-Aware Support:** Answers queries on hospital admissions, government health schemes, and medical resources with localized knowledge.
- **Personalized Comfort:** Greets authenticated users by name and maintains a warm, non-judgmental tone.

### 📜 2. Government Health Schemes Explorer
- **Interactive Directory:** Pre-loaded with critical schemes such as **Ayushman Bharat (PM-JAY)**, **Central Government Health Scheme (CGHS)**, and **Janani Suraksha Yojana (JSY)**.
- **Clarity Under Stress:** Clearly outlines scheme benefits, eligibility rules, and provides a direct call-to-action application link.

### 🩸 3. Vitality & Emergency Resource Portal
- **Urgent Donations:** Active board tracking urgent requests for **Blood & Organ donations**.
- **Instant Lifelines:** Users can submit request cards detailing the blood group, location, urgency level, and contact details.
- **No-Divider Layout:** Highlights incoming requests using soft spacing, prioritizing high-urgency notifications.

### 🔐 4. Secure Authentication & User Workspace
- **Identity Security:** Register and login workflows secured with state-of-the-art password hashing (Bcrypt) and secure session handshakes (JSON Web Tokens).
- **Personalized Focus:** Saves user-selected health interests to customize their dashboard experience.

---

## 🛠️ Technology Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | HTML5, Vanilla JS, TailwindCSS | High-end digital craftsmanship with customized Material design palettes. |
| **Backend** | Node.js, Express.js | Robust REST API endpoints serving static landing resources. |
| **Database** | MongoDB & Mongoose | Flexible ODM handling user accounts, schemes, and live requests. |
| **AI Engine** | Ollama local instance | Local private inference powering Saarthi's LLM conversation capabilities. |
| **Security** | JWT & bcryptjs | Industry-standard encryption and token authentication. |

---

## 📂 Project Architecture

```text
SAARTHI/
├── server/                     # Express.js REST Backend
│   ├── models/                 # Mongoose Database Models
│   │   ├── User.js             # User Accounts & Health Interests
│   │   ├── Scheme.js           # Government Healthcare Schemes Schema
│   │   └── Donation.js         # Blood & Organ Emergency Requests Schema
│   ├── public/                 # Static assets folder (served on port 5000)
│   │   └── index.html          # Dynamic Web Application Interface
│   ├── index.js                # Core Server logic, middleware & API routes
│   ├── seed.js                 # Database seeder for healthcare schemes
│   └── test_ai.js              # Integration test script for Ollama Chat API
│
└── stitch_saarthi_ai_healthcare_guide/
    ├── DESIGN.md               # Detailed Design System strategy document
    ├── code.html               # Pure, offline-capable application prototype
    └── screen.png              # Visual preview of the main interface
```

---

## 🔌 Getting Started & Setup

Follow these steps to run **Saarthi** fully locally on your computer:

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally, or a remote MongoDB Atlas URI.
- [Ollama](https://ollama.com/) installed and running locally.

---

### Step-by-Step Installation

#### 1. Setup the Environment Variables
Navigate into the `server` directory and create a `.env` file:
```bash
cd server
```
Create a file named `.env` and configure your settings:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/saarthi
JWT_SECRET=saarthi_calm_anchor_secret_key
OLLAMA_MODEL=llama3
```

#### 2. Install Server Dependencies
Within the `server` directory, run:
```bash
npm install
```

#### 3. Seed the Database
Populate your local MongoDB with the default, pre-packaged Government Health Schemes:
```bash
node seed.js
```
*Expected Output: `Connected to MongoDB for seeding... Database Seeded Successfully!`*

#### 4. Prepare your Local AI (Ollama)
Ensure your local Ollama daemon is running. Open a terminal and run:
```bash
# Pull the preferred lightweight model
ollama pull llama3

# Fire up the Ollama daemon (if not already running as a background service)
ollama serve
```

#### 5. Verify the AI Chat Link
Before launching the server, you can verify your integration with Ollama by running the utility test script:
```bash
node test_ai.js
```
*This will perform a localized post-request to verify model availability and empathetic output formulation.*

---

## 🏃 Running Saarthi

To launch the backend server and serve the interactive web interface:

```bash
# From the server directory
npm start
```
*The terminal will output: `Connected to MongoDB` and `Saarthi server running on http://localhost:5000`.*

Open your web browser and navigate to:
👉 **[http://localhost:5000](http://localhost:5000)**

You can now register a secure account, ask **Saarthi AI** questions, scroll through verified healthcare schemes, or post live blood/organ donor request cards!

---

## 🎨 Visual System Standard

When contributing code or modifying components, please respect the guidelines in `/stitch_saarthi_ai_healthcare_guide/DESIGN.md`:
*   **The Layering Principle:** Stacking layers creates focus. Use the `surface` hierarchy (`surface` background ➔ `surface-container-low` section ➔ `surface-container-lowest` card) instead of box shadows.
*   **The "Vitality Pulse":** For AI processing feedback, utilize a container featuring `surface-tint` at 5% opacity and a `secondary` left-hand accent bar (`4px` width).
*   **The "Ghost Border":** High-density grids should fallback to `outline-variant` at **15% opacity** rather than thick borders.

---

## 📄 License
This project is open-source and licensed under the [ISC License](https://opensource.org/licenses/ISC). 

***

*Saarthi is dedicated to bringing premium digital craftsmanship, radical clarity, and comforting guidance to healthcare tech.*
