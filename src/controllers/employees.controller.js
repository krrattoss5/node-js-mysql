import {pool} from '../db.js'

export const getEmployees = async (req,res)=>{
  const [rows] = await pool.query('SELECT * FROM employee')
  res.json(rows)
}

export const getEmployee = async (req,res)=>{
  const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?',[req.params.id])

  rows.length <= 0?res.status(404).json({"employee":"Not Found!"}):res.json(rows[0])
}

export const createEmployee = async (req,res)=>{
  const {name,salary} = req.body
  const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES (?, ?)',[name,salary])
  res.send({
    id:rows.insertId,
    name,
    salary
  })
}

export const updateEmployee = (req,res)=>res.send('Actualizando empleados...')

export const deleteEmployee = async (req,res)=>{
  const [result] = await pool.query('DELETE FROM employee WHERE id = ?',[req.params.id])

  result.affectedRows <= 0?res.status(404).json({"employee":"Not Exist!"}):res.status(204).json({"employee":"Deleted"})
}