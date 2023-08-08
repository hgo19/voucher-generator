import express from 'express'
import voucherRoute from './routes/voucher-route'
import 'dotenv/config'

const PORT = process.env.PORT ?? 3001
const app = express()
app.use(express.json())

app.use('/voucher', voucherRoute)

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })
