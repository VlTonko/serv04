const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 3000,
  password: 'rootUser',
  database: 'postgres',
});

client.connect();

client.query(`Select * from user`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
