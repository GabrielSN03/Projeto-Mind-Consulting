import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "Ga@151003694135",
    database: "crud",
})