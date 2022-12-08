const sqlite3_verbose = sqlite3.verbose();
const args = minimist(process.argv.slice(2),{
	default: {
		port: 5000
	},
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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



db.close((err) => {
	if (err) {
		return console.error(err.message);
	}
	console.log('Close the database')
})


app.use((req, res) => {
	res.status(404).send("404 NOT FOUND");
});


// app.listen(8000, () => {
// 	console.log("Server listening on localhost:8000")
// });