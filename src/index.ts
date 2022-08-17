import express from 'express'
const app = express()
const PORT = 3000
 
app.use(express)
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}`)
})