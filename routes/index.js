import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("got request", req.route);
  res.send({ response: "I am alive" }).status(200);
});

export default router;
