const mongoose = require('mongoose')
require('dotenv').config()

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})


const mongoUrl = process.env.MONGO_URI
mongoose.connect(mongoUrl)
  .then(() => console.log("Connected..."))

module.exports = mongoose.model('Blog', blogSchema)