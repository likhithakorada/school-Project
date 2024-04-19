const express = require("express");
const schoolModel = require("../modules/schoolModel"); // Assuming correct model import
const schoolRouter = express.Router();

// GET route to retrieve a school by ID
schoolRouter.get("/:Id", async (req, res) => {
    try {
        const Id = req.params.Id;
        const school = await schoolModel.findById(Id);
        if (!school) {
            return res.status(404).json({ message: "School not found" });
        }
        res.json(school);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

// POST route to create a new school
schoolRouter.post("/", async (req, res) => {
    try {
        const { schoolName, schoolFees, location, contactInfo } = req.body; // Updated variable names
        const school = new schoolModel({schoolName, schoolFees, location, contactInfo }); // Updated variable names
        await school.save();
        res.status(201).json(school);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});





//  schoolRouter.get("/",async (req,res)=>{
//     console.log('got request from frontend');
//    let schoolList = await  schoolModel.find();
//      res.json(schoolList);
//  });

schoolRouter.put("/:Id",async (req,res)=>{
    let {schoolName,schoolFees,location,contactInfo} = req.body;
  let Id = req.params.Id;
    let school = await  schoolModel.findByIdAndUpdate(Id,{schoolName,schoolFees,location,contactInfo},{new:false});
     res.json(school);
 });

schoolRouter.delete("/:Id",async (req,res)=>{
   let s = await  schoolModel.findByIdAndDelete(req.params.Id);
     if(s != null) res.json(s);
    else res.status(404).send("No such school found");
 })
 module.exports = schoolRouter;
