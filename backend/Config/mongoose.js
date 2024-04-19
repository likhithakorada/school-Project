const { default: mongoose } = require("mongoose")
const {mongo_url} = require("./Config")


mongoose.connect(mongo_url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("mongodb connection established"))
.catch((err)=>console.log(err));

module.exports = mongoose