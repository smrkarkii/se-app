const express = require("express");
const router = express.Router();
const Services = require("../models/Services");
const { body, validationResult } = require("express-validator");

// Route 1   : Get all the services: GET "/api/post/fetchallservices". No Login Required
router.get("/fetchallservices", async (req, res) => {
  try {
    const services = await Services.find({ id:req.id });

    res.json(services);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error occured");
  }
});

//Route 2    : Add a new services using: POST "/api/notes/addservices". No Login Required
router.post(
  "/addservices",
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be of 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description,starting_date,ending_date } = req.body;
      // if there are errors, return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const services = new Services({
        title,
        description,
        starting_date,
        ending_date,
      });
      const savedServices = await services.save();

      res.json(savedServices);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error occured");
    }
  }
);

// //ROUTE 3: Update an existing services using: PUT "/api/notes/updateservices". No Login Required
router.put(
  "/updateservices/:id",
  async (req, res) => {
    const { title, description,starting_date,ending_date } = req.body;
try {
  //Create a newServices object
const newServices={};
if(title){newServices.title=title};
if(description){newServices.description=description};
if(starting_date){newServices.starting_date=starting_date};
if(ending_date){newServices.ending_date=ending_date};

//Find the note to be updated and update it
let services =await Services.findById(req.params.id);
if(!services){
  return res.status(404).send("Not Found")}

  // if(note.user.toString()!==req.user.id){
  //   return res.status(401).send("Not Allowed");
  // }

  services=await Services.findByIdAndUpdate(req.params.id,{$setnewServices},{new:true})
  res.json({services});
 
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server error occured");
}
  })


//   //ROUTE 4: Delete an existing services using: Delete "/api/posts/deleteservices".No Login Required
router.delete(
  "/deleteservices/:id",
  async (req, res) => {
try {

//Find the services to be deleted and delete it
let services =await Services.findById(req.params.id);
if(!services){
  return res.status(404).send("Not Found")}

// //Allow deletion if only user owns this Note
//   if(note.user.toString()!==req.user.id){
//     return res.status(401).send("Not Allowed");
//   }

services=await Services.findByIdAndDelete(req.params.id)
  res.json({"Success":"This service has been deleted",services:services});


} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server error occured");
}



  })

module.exports = router;
