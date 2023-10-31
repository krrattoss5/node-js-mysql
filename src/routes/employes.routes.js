import { Router } from "express";

const route = Router()

route.get('/employees',(req,res)=>res.send('Obteniendo empleados...'))
route.post('/employees',(req,res)=>res.send('Creando empleados...'))
route.put('/employees',(req,res)=>res.send('Actualizando empleados...'))
route.delete('/employees',(req,res)=>res.send('Eliminando empleados...'))

export default route;