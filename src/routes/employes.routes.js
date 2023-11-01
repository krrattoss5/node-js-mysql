import { Router } from "express";
import {deleteEmployee, getEmployees, updateEmployee, createEmployee, getEmployee} from "../controllers/employees.controller.js"

const route = Router()

route.get('/employees',getEmployees)
route.get('/employees/:id',getEmployee)
route.post('/employees',createEmployee)
route.put('/employees/:id',updateEmployee)
route.delete('/employees/:id',deleteEmployee)

export default route;