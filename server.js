#!/usr/bin/env node

import minimist from "minimist"
import express from "express"

// This is where our server will be 
//
const app = express();
const args = minimist(process.argv.slice(2),{
	default: {
		port: 5000
	},
});



app.use(express.urlencoded({extended:true}));
app.use(express.json());

