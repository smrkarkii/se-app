const connectToMongo=require('./db');
const express = require('express');
connectToMongo();
const app = express()
const port = 5000
var cors = require('cors')

app.use(cors())

app.use(express.json())
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/services',require('./routes/services'))
app.use('/api/posts',require('./routes/posts'))
app.use('/api/contacts',require('./routes/contacts'))
app.use('/api/reservations',require('./routes/reservations'))


app.listen(port, () => {
  console.log(`ICTC backend listening on port http://localhost:${port}`)
})
