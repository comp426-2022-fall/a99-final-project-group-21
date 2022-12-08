#!/usr/bin/env node

import minimist from "minimist"
import express from "express"
import bodyParser from 'body-parser'
import path from 'path'
import sqlite3 from 'sqlite3'
import { fileURLToPath } from 'url'



// This is where our server will be 
const app = express();
const sqlite3_verbose = sqlite3.verbose();
const args = minimist(process.argv.slice(2),{
	default: {
		port: 5000
	},
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());



//const sqlite3 = require('sqlite3').verbose();
// This is our database
let db = new sqlite3_verbose.Database('./group21.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
		return console.error(err.message);
	}
	console.log('Connected to the group21 SQlite database.')
});

// db.run('CREATE TABLE group21up(username text, password text)');


db.run(`INSERT INTO group21up(username text, password text) VALUES(?)`, ['username'], ['password'], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });


// db.serialize(() => {
// 	app.use(bodyParser.urlencoded({ extended: true }));
// 	db.each(`SELECT username as id,
// 					password as password
// 			 FROM USERS`, (err, row) => {
// 	  if (err) {
// 		console.error(err.message);
// 	  }
// 	  console.log(row.id + "\t" + row.name);
// 	});
//   });


db.close((err) => {
	if (err) {
		return console.error(err.message);
	}
	console.log('Close the database')
})
