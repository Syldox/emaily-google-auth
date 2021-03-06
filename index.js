const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.GoogleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken) =>{
    console.log(accessToken)
}));


const PORT = process.env.PORT || 5000;

app.listen(PORT);