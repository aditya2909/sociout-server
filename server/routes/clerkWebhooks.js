import express from "express";
import { inngest } from "../inngest/index.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const event = req.body;

  await inngest.send({
    name: event.type,
    data: event.data,
  });

  res.status(200).send("Webhook received");
});

export default router;
