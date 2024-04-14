require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override');
const path = require('path')
// const helmet = require('helmet');
// const passport = require('./passport');
const router = require('./routes');

const { PORT, SESSION_SECRET, MONGODB_URL } = process.env;

const app = express();

// Middleware
// app.use(helmet()); // Adds security headers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', [`${__dirname}/../frontend/views`, `${__dirname}/../frontend/views/dashboard`]);
app.use(express.static('frontend/public'));
app.use(methodOverride('_method'));

// Session configuration
if (!SESSION_SECRET || !MONGODB_URL) {
    console.error('SESSION_SECRET or MONGODB_URL is not provided in the environment variables.');
    process.exit(1);
}

const sessionStore = MongoStore.create({
    mongoUrl: MONGODB_URL,
    ttl: 24 * 60 * 60, // 1 day in seconds
    touchAfter: 24 * 3600,
    crypto: {
        secret: 'Nouveau'
    }
});

const sessionConfig = {
    secret: SESSION_SECRET,
    name: 'TheFoodCartelSession',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
        // secure: process.env.NODE_ENV === 'production', // Should be true in production
        sameSite: 'strict',
        httpOnly: true
    }
};

app.use(session(sessionConfig));
// app.use(passport.initialize());
// app.use(passport.session());

// Set user in locals
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

// Routes
app.use('/', router);

// MongoDB Connection
mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('MongoDB connected');
        const server = app.listen(PORT, () => {
            console.log(`✔ Server started on port http://localhost:${PORT}/roles`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit the process on MongoDB connection error
    });

module.exports = app;