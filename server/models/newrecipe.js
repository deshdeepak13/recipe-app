const mongoose = require('mongoose')



const recipeSchema = new mongoose.Schema({
    rtitle: String,
    rdesc: String,
    rimage: String,
    rcategory: String,
    rcuisine: String,
    ringre: String,
    rinstruc: String,
    rtags: String,
    rauthor: String,
  });

const recipes = mongoose.model('recipe', recipeSchema);
module.exports={recipes}