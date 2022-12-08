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



const dbPromise = open({
	filename : 'data.db',
	driver: sqlite3.Database
})

//const db = require("./api/db/sqlapi");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// import path from 'path';
const __dirname = path.resolve();

// app.engine('handlebars', engine());
app.set('view engine', 'js');
app.set('views', path.join(__dirname, '..', 'views'));

 app.use(express.urlencoded({extended:true}))


 app.use(express.static(path.join(__dirname, '..', 'views')));

const args = minimist(process.argv.slice(2),{
	default: {
		port: 8000
	},
});

// app.listen(port, function(err) {
//     if(err) { 
//         console.log(err);
//         console.log("server listening on port: ", port);
//     }
// });


app.get('/', async (req, res) => {
	const db = await dbPromise;
	res.render('index');
})

app.get('/', async (req, res) => {
	const db = await dbPromise;
	const messages = await db.all('SELECT * FROM Message;')
	res.render('home', {messages})
})

app.get("/login-screen", async (req, res) => {
	res.render("login-screen");
  });

  app.post("/login-screen", async (req, res) => {
	const db = await dbPromise;
	const { username, password} = req.body;
// need to check if username and password match
	// if (password !== passwordRepeat) {
	//   res.render("register", { error: "Passwords must match" });
	//   return;
	// }
	const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
	await db.run(
	  "INSERT INTO User (username, password) VALUES (?, ?)",
	  username,
	  passwordHash
	);
	res.redirect("/login-screen");
  });  

  app.post("/user-creation-screen", async (req, res) => {
	const db = await dbPromise;
	const { username, password} = req.body;
//need to check if username already exist

	// if (password !== passwordRepeat) {
	//   res.render("register", { error: "Passwords must match" });
	//   return;
	// }
	const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
	await db.run(
	  "INSERT INTO User (username, password) VALUES (?, ?)",
	  username,
	  passwordHash
	);

	const checklogin = db.prepare(`SELECT * FROM users WHERE user='${username}' and password= '${password}';`);
    let row = stmt.get();
    if (row === undefined) {
        req.app.set('username', username);
        req.app.set('password', password);
    } else {
        req.app.set('username', username);
        req.app.set('password', password);
        res.redirect('/login-screen');
    }
	res.redirect("/login-screen");
  });  

// app.post('/message', async (req, res) => {
// 	const db = await dbPromise
// 	const messageText = req.body.messageText
// 	await db.run('INSERT INTO Message (text) VALUES (?);', messageText)
// 	res.redirect('/')
// })

app.get('/user-screen', async (req, res) => {
	const db = await dbPromise;
	res.render('user-screen')
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


