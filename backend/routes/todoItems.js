const router = require("express").Router();

const todoItems = require("../models/todoItems");
// imports todo model
const todoItemsModel = require("../models/todoItems");

// lets create our first routes -- we will add todo items to our database
router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      //
      item: req.body.item,
    });
    // save this to the database
    const saveItem = await newItem.save();
    res.status(200).json("Items added successfully.");
  } catch (error) {
    res.json(error);
  }
});

// second routes -- get data from the database

router.get("/api/items", async (req, res) => {
  try {
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).json(allTodoItems);
  } catch (error) {
    res.json(error);
  }
});

// update item
router.put("/api/item/:id", async (req, res) => {
  try {
    // find item by its id and update them
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Item updated");
  } catch (error) {
    res.json(error);
  }
});

// delete item from database
router.delete("/api/item/:id", async (req, res) => {
  try {
    // find he item by id and delete it
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Item deleted");
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
