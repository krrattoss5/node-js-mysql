import {pool} from '../db.js'

export const getEmployees = async (req,res)=>{
  try {
  const [rows] = await pool.query('SELECT * FROM employee')
  res.json(rows)
  } catch (error) {
    return res.status(500).json({
      message:'No se pudieron obtener los empleados!'
    })
  }
}

export const getEmployee = async (req,res)=>{
  try {
  const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?',[req.params.id])

  rows.length <= 0?res.status(404).json({"employee":"Not Found!"}):res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      message:'No se pudo obtener el empleado!'
    })
  }
}

export const createEmployee = async (req,res)=>{
  try {
  const {name,salary} = req.body
  const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES (?, ?)',[name,salary])
  res.send({
    id:rows.insertId,
    name,
    salary
  })
  } catch (error) {
    return res.status(500).json({
      message:'No se pudo crear el empleado!'
    })
  }
}

export const updateEmployee = async (req,res)=>{
  try {
  const {id} = req.params
  const {name,salary} = req.body

  const [result] = await pool.query("UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?",[name,salary,id])

  result.affectedRows === 0?res.status(404).json("Not affected"):res.status(200).json("Empleado actualizado")
  } catch (error) {
    return res.status(500).json({
      message:'No se pudo actualizar el empleado!'
    })
  }
}

export const deleteEmployee = async (req,res)=>{
  try {
  const [result] = await pool.query('DELETE FROM employee WHERE id = ?',[req.params.id])

  result.affectedRows <= 0?res.status(404).json({"employee":"Not Exist!"}):res.status(204).json({"employee":"Deleted"})
  } catch (error) {
    return res.status(500).json({
      message:'No se pudo eliminar el empleado!'
    })
  }
}