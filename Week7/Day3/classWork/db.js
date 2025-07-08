import knex from 'knex';
import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { PGHOST, PGPORT, PGUSER, PGDATABASE, PGPASSWORD } = process.env;

const db = knex(
    {
        client: 'pg',
        connection: {
            host: PGHOST,
            port: PGPORT,
            user: PGUSER,
            database: PGDATABASE,
            password: PGPASSWORD,
            ssl: { rejectUnauthorized: false }
        }
    }
);

const pool = new Pool({
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false }
})

const result = await pool.query('select * from products where id=$1', [2]);
console.log(result.rows);


// const trx = await db.transaction();

// try {
//     const [product1] = await db('products')
//         .insert({ name: "qqq", price: 1212 }, ['id', 'name', 'price'])
//         .transacting(trx);
//     await trx.rollback();
//     const [product2] = await db('products')
//         .insert({ name: "zzz", price: 2121 }, ['id', 'name', 'price'])
//         .transacting(trx);

//     console.log(product1, product2);

//     await trx.commit();
// } catch (error) {
//     console.log(error);
//     await trx.rollback();
// }

// try {
//     //select
//     const rows = await db.select('*').from('products').where('id', '<=', 10);

//     //insert
//     // const rows = await db('products').insert([
//     //     {name: "IPad", price: 1616}
//     // ],["id"]);
//     // .returning();

//     //update
//     // const rows = await db('products')
//     // .update({name: 'IPad 17'}, ["id", "name", "price"])
//     // .where({id:1});

//     /**raw */
//     // const {rows} = await db.raw('select * from products where id = ?', [4]);
//     console.log(rows);
// } catch (error) {
//     console.log(error);
// };