const express = require("express");
const app = express();
const multer = require("multer");
const uploadFile = require("./services/storage.service.js");
const postmodel = require("./model/post.model")
const cors = require("cors")

const upload = multer({storage:multer.memoryStorage()});
app.use(cors())

app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    console.log("FILE:", req.file);
    console.log("BODY:", req.body);

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const result = await uploadFile(req.file.buffer);

    const post = await postmodel.create({
      image: result.url,
      caption: req.body.caption,
    });

    return res.status(201).json({
      message: "post created",
      post,
    });
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/posts",async (req,res)=>{
    const posts = await postmodel.find();

    return res.status(200).json({
        message:"Post Fetched successfully",
        posts
    })
})

module.exports = app;