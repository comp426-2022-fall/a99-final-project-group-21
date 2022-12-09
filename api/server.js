//#!/usr/bin/env node
import minimist from "minimist"
import express, {response} from "express"
import bodyParser from 'body-parser'
import path from 'path'
import sqlite3 from 'sqlite3'
import bcrypt from "bcrypt"
import { open } from 'sqlite'

const SALT_ROUNDS = 10;


const app = express();
const pathresolve = path.resolve();

const dbPromise = open({
	filename : 'data.db',
	driver: sqlite3.Database
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// import path from 'path';
const __dirname = path.resolve();

// app.engine('handlebars', engine());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

 app.use(express.urlencoded({extended:true}))


 app.use(express.static(path.join(__dirname, '..', 'views')));

const args = minimist(process.argv.slice(2));
var port = 5555;
if (args.port) {
	port = args.port;
}

app.get('/', async (req, res) => {
	const db = await dbPromise;
	res.render('index');
})

app.get("/login-screen", async (req, res) => {
	res.render("login-screen");
  });

  app.post("/login-screen", async (req, res) => {
	const db = await dbPromise;
	const { username, password} = req.body;
// need to check if username and password match

	// for now
	// const salt = bcrypt.genSaltSync(SALT_ROUNDS);
	 //const passwordHash = bcrypt.hashSync(password, salt);
	// await db.get('SELECT username username, password password FROM User WHERE username = ?', [username], (err, row) => {
	// 	if (err) {
	// 		res.redirect("/login-screen");
	// 		return;
	// 	}
	// 	const otherHash = bcrypt.synchash(row.password, SALT_ROUNDS);
	// })
	//const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
	// bcrypt.compare(otherHash, passwordHash, (err, result) => {
	// 	if (result == 0) {
	// 		res.redirect("/login-screen");
	// 		return;
	// 	}
	// })

	//db.get(`SELECT * FROM User WHERE username='${username}' and password= '${password}';`, (err, row) => {
		db.getDatabaseInstance(`SELECT * FROM User WHERE username = 1`, (err, row) => {
			res.redirect('/login-screen');
			if (row === undefined) {
			req.app.set('username', username);
			//req.app.set('password', password);
			return;
		} else {
			req.app.set('username', username);
			//req.app.set('password', password);
			res.redirect('/user-screen');
			return;
		}
	});
	
    // let row = (await checklogin).get();
    
	res.redirect("/user-screen");
  });  


  app.get('/user-creation-screen', async (req, res) => {
	// const db = await dbPromise;
	res.render('user-creation-screen');
})


  app.post("/user-creation-screen", async (req, res) => {
	const db = await dbPromise;
	const { username, password} = req.body;
//need to check if username already exist

	const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
	await db.run(
	  "INSERT INTO User (username, password) VALUES (?, ?)",
	  username,
	  passwordHash
	);

	
	 res.redirect("/login-screen");
  });  
  app.get('/index', async (req, res) => {
	// const db = await dbPromise;
	res.render('login-screen')
})

app.get('/user-screen', async (req, res) => {
	// const db = await dbPromise;
	res.render('user-screen')
})

app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
});

const setup = async () => {
	const db = await dbPromise
	await db.migrate()
	app.listen(port, () => {
		console.log('listening at http://localhost:' + port)
	})
}
setup()


