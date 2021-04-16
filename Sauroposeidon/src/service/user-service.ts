import pool from '../config/maria-pool'

export const getUser = async () => {
    const conn = await pool.getConnection()
    const rows = await pool.query('select * from tb_user')
    console.log(rows)
    return rows;
}