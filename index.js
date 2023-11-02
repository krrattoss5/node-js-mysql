import app from './src/app.js'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`running on http://localhost:${PORT}/`))