const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/users.router")
const productRouter = require("./routes/products.router")

const app = express()
const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.use(express.json())

// Mongoose
mongoose
  .connect(
    "mongodb+srv://pavelcuentas:Tsuna_ZERO2@projectsplus.awa4d2q.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.log(`${error} error`)
  })


// Routes
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
