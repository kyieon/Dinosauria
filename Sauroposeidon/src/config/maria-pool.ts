import db, { Pool } from 'mariadb'

const pool: Pool = db.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'dinosauria'
})

export default pool
