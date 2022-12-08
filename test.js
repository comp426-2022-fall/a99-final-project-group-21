// This is where our server will be 
import express from 'express'

const express = require('express')
const passport = require('passport')
//const passport = passport
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