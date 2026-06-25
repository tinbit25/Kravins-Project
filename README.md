# 🍽️ Kravinz — Private Chef Booking & Meal Ordering Platform

> Connecting food lovers with talented private chefs for an authentic home-cooking experience.

---

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [API Reference](#api-reference)
- [Pages & Routes](#pages--routes)
- [Deployment](#deployment)

---

## 🧑‍🍳 About the Project

**Kravinz** is a full-stack web platform that bridges the gap between home cooks craving restaurant-quality meals and professional chefs looking for private cooking opportunities. Users can:

- Browse and book a private chef for home events
- Order custom meals prepared by local chefs
- Apply to join the platform as a chef
- Get in touch via a contact form
- Manage all submissions through a role-protected admin dashboard

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Hero Landing Page** | Animated full-screen background with smooth Framer Motion transitions |
| 👨‍🍳 **Book a Chef** | Submit a request to hire a private chef with budget and cuisine preferences |
| 🍱 **Meal Orders** | Place custom meal orders with delivery address and meal preferences |
| 🎓 **Become a Chef** | Chefs can apply by submitting their availability, location, and skills |
| 📬 **Contact Us** | Contact form with message submission |
| 🔐 **Auth System** | Sign-up and login with role-based access control |
| 🛡️ **Admin Dashboard** | Admin-only panel to view and delete bookings, orders, chef applications, and messages |
| 🗺️ **Interactive Map** | Leaflet-powered map integration |
| 📱 **Responsive Design** | Mobile-friendly layout across all pages |

---

## 🛠️ Tech Stack

### Frontend (`/Client`)

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React Router v6](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [Leaflet / React-Leaflet](https://react-leaflet.js.org/) | Interactive maps |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Icons](https://react-icons.github.io/react-icons/) | Extended icon set |
| [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) | Scroll-triggered animations |

### Backend (`/Server`)

| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) | Runtime environment |
| [Express](https://expressjs.com/) | Web server framework |
| [CORS](https://www.npmjs.com/package/cors) | Cross-origin resource sharing |
| JSON flat files | Data persistence (no database) |

---

## 📁 Project Structure

```
Kravins-Project/
├── Client/                         # React frontend
│   ├── public/                     # Static assets
│   ├── src/
│   │   ├── assets/                 # Images, fonts, etc.
│   │   ├── components/             # Reusable UI components
│   │   │   ├── About/
│   │   │   ├── Home/               # Hero, Packages, MeetOurChefs, etc.
│   │   │   ├── admin/
│   │   │   ├── common/             # Navbar, Footer
│   │   │   ├── contact/
│   │   │   ├── makerequest/
│   │   │   └── signup/
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── pages/                  # Page-level components
│   │   │   ├── Home.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   ├── ContactUs.jsx
│   │   │   ├── MakeRequest.jsx
│   │   │   ├── MealOrderPage.jsx
│   │   │   ├── BecomeAChef.jsx
│   │   │   ├── SignUpPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── Admin.jsx
│   │   ├── App.jsx                 # Root component & router setup
│   │   ├── main.jsx                # React entry point
│   │   └── index.css               # Global styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── Server/                         # Express backend
│   ├── server.js                   # Main server file with all API routes
│   ├── users.json                  # Registered users
│   ├── bookChef.json               # Chef booking requests
│   ├── becomeChef.json             # Chef applications
│   ├── orderData.json              # Meal orders
│   └── contactInfo.json            # Contact form submissions
│
├── Procfile                        # Heroku process config
└── package.json                    # Root package config
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/tinbit25/Kravins-Project.git
cd Kravins-Project
```

**2. Install backend dependencies**

```bash
cd Server
npm install
```

**3. Install frontend dependencies**

```bash
cd ../Client
npm install
```

### Running Locally

**Start the backend server** (runs on port `5000`):

```bash
cd Server
node server.js
```

**Start the frontend dev server** (runs on port `5173`):

```bash
cd Client
npm run dev
```

Then open your browser at **http://localhost:5173**

---

## 📡 API Reference

All endpoints are served by the Express backend on port `5000`.

### 🔑 Auth

| Method | Endpoint | Body | Description |
|---|---|---|---|
| `POST` | `/signup` | `{ name, email, password }` | Register a new user |
| `GET` | `/signup` | — | Get all registered users |
| `DELETE` | `/signup/:email` | — | Delete a user by email |
| `POST` | `/login` | `{ email, password }` | Authenticate a user |

### 👨‍🍳 Chef Bookings

| Method | Endpoint | Body | Description |
|---|---|---|---|
| `POST` | `/submit` | `{ name, phone, origin, budget }` | Submit a chef booking request |
| `GET` | `/submit` | — | Get all booking requests |
| `DELETE` | `/submit/:id` | — | Delete a booking by ID |

### 🎓 Chef Applications

| Method | Endpoint | Body | Description |
|---|---|---|---|
| `POST` | `/submitchefform` | `{ name, phone, location, availability }` | Apply to become a chef |
| `GET` | `/submitchefform` | — | Get all chef applications |
| `DELETE` | `/submitchefform/:id` | — | Delete an application by ID |

### 🍱 Meal Orders

| Method | Endpoint | Body | Description |
|---|---|---|---|
| `POST` | `/submitMealOrder` | `{ mealPreference, numberOfMeals, personalInfo, address }` | Place a meal order |
| `GET` | `/submitMealOrder` | — | Get all meal orders |
| `DELETE` | `/submitMealOrder/:id` | — | Delete an order by ID |

### 📬 Contact

| Method | Endpoint | Body | Description |
|---|---|---|---|
| `POST` | `/contact` | `{ name, email, message }` | Submit a contact message |
| `GET` | `/contact` | — | Get all contact messages |
| `DELETE` | `/contact/:id` | — | Delete a message by ID |

---

## 🗺️ Pages & Routes

| Route | Component | Visibility |
|---|---|---|
| `/` | Home | Public |
| `/about` | AboutUs | Public |
| `/contact` | ContactUs | Public |
| `/makerequest` | MakeRequest | Public |
| `/order` | MealOrderPage | Public |
| `/become-chef` | BecomeAChef | Public |
| `/how-it-works` | HowItWorks | Public |
| `/signups` | SignUpPage | Public (hides Navbar/Footer) |
| `/login` | LoginPage | Public (hides Navbar/Footer) |
| `/admin` | AdminPage | **Admin only** |

---

## ☁️ Deployment

The project is configured for deployment on **Heroku** (backend) and **GitHub Pages** (frontend).

### Deploy frontend to GitHub Pages

```bash
cd Client
npm run deploy
```

> This runs `vite build` then pushes the `dist/` folder to the `gh-pages` branch.

### Deploy backend to Heroku

The `Procfile` at the root tells Heroku how to start the server:

```
web: node Server/server.js
```

The `heroku-postbuild` script in `Client/package.json` automatically installs and builds the frontend during Heroku deployment.

