import { Router } from "express";
import {deleteEmployee, getEmployees, updateEmployee, createEmployee} from "../controllers/employees.controller.js"

const route = Router()

route.get('/employees',getEmployees)
route.post('/employees',createEmployee)
route.put('/employees',updateEmployee)
route.delete('/employees',deleteEmployee)

export default route;