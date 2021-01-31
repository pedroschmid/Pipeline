const express = require("express");
const { index, store, update, destroy } = require("./controllers/controller");

const router = express.Router();

router.get("/", index);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = { router };
