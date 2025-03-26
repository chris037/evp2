const mysql = require("mysql");

const db = mysql.createConnection({
  host: "153.92.15.61",     // or your remote DB host
  user: "u2134354",          // your MySQL user
  password: "h!gMMvG&MY5qOq51",          // your MySQL password
  database: "u213435430_ibexdb"    // database name (create this first)

});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ Connected to MySQL");
});

module.exports = db;