const express = require("express");
const router = express.Router();
const Posts = require("../models/Posts");
const { body, validationResult } = require("express-validator");

// Route 1   : Get all the posts: GET "/api/post/fetchallposts". No Login Required
router.get("/fetchallposts", async (req, res) => {
  try {
    const posts = await Posts.find({ id:req.id });

    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error occured");
  }
});

//Route 2    : Add a new posts using: POST "/api/notes/addposts". No Login Required
router.post(
  "/addposts",
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be of 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title,type,instructor,participants, description,organizer } = req.body;
      // if there are errors, return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const posts = new Posts({
        title,
        description,
        type,
        instructor,
        participants,
        organizer,
      });
      const savedPosts = await posts.save();

      res.json(savedPosts);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error occured");
    }
  }
);

// //ROUTE 3: Update an existing posts using: PUT "/api/notes/updateposts". No Login Required
router.put(
  "/updateposts/:id",
  async (req, res) => {
const {title,type,instructor,participants, description,organizer}=req.body;
try {
  //Create a newPosts object
const newPosts={};
if(title){newPosts.title=title};
if(description){newPosts.description=description};
if(type){newPosts.type=type};
if(instructor){newPosts.instructor=instructor};
if(participants){newPosts.participants=participants};
if(organizer){newPosts.organizer=organizer};

//Find the note to be updated and update it
let posts =await Posts.findById(req.params.id);
if(!posts){
  return res.status(404).send("Not Found")}

  // if(note.user.toString()!==req.user.id){
  //   return res.status(401).send("Not Allowed");
  // }

  posts=await Posts.findByIdAndUpdate(req.params.id,{$set:newPosts},{new:true})
  res.json({posts});
 
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server error occured");
}
  })


//   //ROUTE 4: Delete an existing posts using: Delete "/api/posts/deleteposts".No Login Required
router.delete(
  "/deleteposts/:id",
  async (req, res) => {
try {

//Find the posts to be deleted and delete it
let posts =await Posts.findById(req.params.id);
if(!posts){
  return res.status(404).send("Not Found")}

// //Allow deletion if only user owns this Note
//   if(note.user.toString()!==req.user.id){
//     return res.status(401).send("Not Allowed");
//   }

  posts=await Posts.findByIdAndDelete(req.params.id)
  res.json({"Success":"This posts has been deleted",posts:posts});


} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server error occured");
}



  })

module.exports = router;
