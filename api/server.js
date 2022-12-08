#!/usr/bin/env node

//import minimist from "minimist"
import express from "express"
import passport from "passport"

// This is where our server will be 

const passport = passport
const session = require('express-session')
const RedisStore = require('connect-redis') (session)

const app = express();

app.use(session({
	store: new RedisStore({
	  url: config.redisStore.url
	}),
	secret: config.redisStore.secret,
	resave: false,
	saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())

// const args = minimist(process.argv.slice(2),{
// 	default: {
// 		port: 5000
// 	},
// });

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
