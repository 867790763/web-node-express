const mysql = require('mysql')
const db = {
        host: '175.178.20.197',
        port: 3306,
        user: 'root',
        password: '123456',
        database: ''
    }
const pool = mysql.createPool(db)

module.exports = {
    connPool(sql: string, val: string, cb: Function) {
        pool.getConnection((error: any, conn: any) => {
            if (error) console.log(error)

            conn.query(sql, val, (err: any, rows: any) => {
                if (err) console.log(err)
                cb(rows)
                conn.release()
            })
        })
    },

    // json格式
    writeJson(res: any, code = 200, msg = 'ok', data:any ) {
        const obj = { code, msg, data }

        if (!data) {
            delete obj.data
        }

        res.send(obj)
    },
    // Promise Type
    pConnPool(sql: string, val: string) {
        return new Promise((resolve) => {
            pool.getConnection((error: any, conn: any) => {
                if (error) console.log(error)

                conn.query(sql, val, (err: any, rows: any) => {
                    if (err) console.log(err)

                    resolve(rows)

                    conn.release()
                })
            })
        })
    },
}