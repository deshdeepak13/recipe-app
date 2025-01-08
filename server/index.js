const express = require('express')
const cors = require('cors')
const multer = require('multer')
const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs');
// import cors from 'cors';
// import multer from 'multer';
// import mongoose from 'mongoose';
const {recipes} = require('./models/newrecipe.js')
// import path from 'path'
const app = express()
const port = 3000;
app.use(cors()) 
app.use(express.json())



let datename = (x)=>{
  return Math.trunc(x/1000)

}

const dbName = "ddRecipe";
async function dbrun(){
  const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

} 
dbrun()

app.use('/images', express.static(path.join(__dirname, 'Images')));
// Endpoint to get the list of images
app.get('/api/images', (req, res) => {
  const imagesDirectory = path.join(__dirname, 'Images');
  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to scan directory' });
    }
    // Filter for image files if necessary
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    res.json(imageFiles);
  });
});


// let client = await fetch("http:/localhost:5173/")
// console.log(client.innerHTML)
// console.log("connected")

// let imagename = Date.now()

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    return cb(null, "Images")
  },
  filename: function (req, file, cb) {
    // imagename=Date.now()
    return cb(null,datename(Date.now())+path.extname(file.originalname))
  }
})

// app.use('/api/recipes', recipeRoutes);

const upload = multer({storage})

app.post('/upload', upload.single('file'), (req, res) => {
  // imagename = Date.now()
  // console.log(req.body)
  // console.log(req.file)
})

app.get('/',async (req, res) => {
  // const detail = new details({site:"gygscs",username:"hujgj",password:"hggjb"})
  // await detail.save()
  const findResult = await recipes.find();
  // console.log(findResult)
  res.json(findResult)
  
  })





app.get('/:_id',async (req, res) => {
  // const detail = new details({site:"gygscs",username:"hujgj",password:"hggjb"})
  // await detail.save()
  const findResult = await recipes.findById(req.params);
  // console.log(findResult)
  res.json(findResult)
  
  })






  app.post('/',async (req, res) => {
  const recipe = req.body
  console.log(recipe)
  // recipe.rimage
  let detail = new recipes(recipe)
  let findResult = await detail.save()
  res.send({success: true, result: findResult})

  })


// app.get('/',async (req, res) => {
//   // const detail = new details({site:"gygscs",username:"hujgj",password:"hggjb"})
//   // await detail.save()
//   const findResult = await details.find();
//   // console.log(findResult)
//   res.json(findResult)
  
//   })
  
  
  
//   app.post('/',async (req, res) => {
//   const password = req.body
//   // console.log(password)
//   let detail = new details(password)
//   let findResult = await detail.save()
//   res.send({success: true, result: findResult})

// })
//   app.delete('/:id',async (req, res) => {
//   // const password = req.body
//   console.log(req.params)
//   // let detail = new details(password)
//   let findResult = await details.deleteOne(req.params);
//   res.send({success: true, result: findResult})
//   // res.send(findResult)

// })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})