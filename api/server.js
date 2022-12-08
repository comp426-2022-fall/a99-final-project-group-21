//#!/usr/bin/env node
import minimist from "minimist"
import {engine} from 'express-handlebars'
import express, {response} from "express"
//import exphbs from "express-handlebars"
import bodyParser from 'body-parser'
import path from 'path'
import sqlite3 from 'sqlite3'
import bcrypt from "bcrypt"
// import sqlite from 'sqlite'
import { fileURLToPath } from 'url'
import { open } from 'sqlite'

const SALT_ROUNDS = 10;


const app = express();
const pathresolve = path.resolve();


// const args = minimist(process.argv.slice(2),{
// 	default: {
// 		port: 8000
// 	},
// });

const dbPromise = open({
	filename : 'data.db',
	driver: sqlite3.Database
})

//const db = require("./api/db/sqlapi");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

import path from 'path';
const __dirname = path.resolve();

// app.engine('handlebars', engine());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// app.set('views', path.join(pathresolve, '..', 'views'));
 app.use(express.urlencoded({extended:true}))


app.get('/', async (req, res) => {
	const db = await dbPromise;
	const messages = await db.all('SELECT * FROM Message;')
	res.render('home', {messages})
})

app.get("/register", async (req, res) => {
	res.render("register");
  });

  app.post("/register", async (req, res) => {
	const db = await dbPromise;
	const { username, password, passwordRepeat } = req.body;
	if (password !== passwordRepeat) {
	  res.render("register", { error: "Passwords must match" });
	  return;
	}
	const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
	await db.run(
	  "INSERT INTO User (username, password) VALUES (?, ?)",
	  username,
	  passwordHash
	);
	res.redirect("/");
  });  

app.post('/message', async (req, res) => {
	const db = await dbPromise
	const messageText = req.body.messageText
	await db.run('INSERT INTO Message (text) VALUES (?);', messageText)
	res.redirect('/')
})

app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
});

const setup = async () => {
	const db = await dbPromise
	await db.migrate()
	app.listen(8000, () => {
		console.log('listening at http://localhost:8000')
	})
}
setup()


