const express = require("express");
const router = express.Router();
const Car = require("./car-model");

router.get("/", async (req, res) => {
  try {
    const data = await Car.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Car.getById(req.params.id);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const validateCar = (req, res, next) => {
  if (!req.body) {
    res.status(400).json({ message: "Car body required" });
  } else if (!req.body.name || !req.body.budget) {
    res.status(400).json({ message: "name and budget are required fields" });
  } else {
    next();
  }
};

router.post("/", validateCar, async (req, res) => {
  try {
    const car = req.body;
    const data = await Car.create(car);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const validateCarId = async (req, res, next) => {
  try {
    const data = await Car.getById(req.params.id);
    if (!data) {
      res.status(404).json({ message: "Invalid id" })
    } else {
      next();
    }
 } catch {
    res.status(500).json({ message: "Server error finding car" });
 }
}

router.put("/:id", validateCarId, validateCar, async (req, res) => {
  try {
    const changes = req.body;
    const { id } = req.params;
    const data = await Car.update(id, changes);
    const updatedCar = await Car.getById(id);
    if(data < 1) {
      res.status(500).json({ message: "Server Error" });
    } else {
      res.status(201).json(updatedCar);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", validateCarId, async (req, res) => {
  try {
    const { id } = req.params;
    await Car.delete(id);
    res.status(200).json({ message: `Successfully deleted car with id: ${id}` })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
