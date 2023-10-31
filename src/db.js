import {createPool} from 'mysql2/promise'

export const pool = createPool({
  host:'localhost',
  user:'admin',
  password:'19568514lJ.',
  port:3306,
  database:'companydb'
})