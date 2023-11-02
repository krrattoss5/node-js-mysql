import {createPool} from 'mysql2/promise'
import { config } from 'dotenv'

config()

export const pool = createPool({
  host:process.env.DB_HOST|| 'localhost',
  user:process.env.DB_USER|| 'admin',
  password:process.env.DB_PASSWORD|| '19568514lJ.',
  port:process.env.DB_PORT|| 3306,
  database:process.env.DB_NAME|| 'companydb'
})