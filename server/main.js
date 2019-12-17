const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Item = require('./models/Item');

const app = express();

app.use(cors());
app.use(express.json());

// Connect database
mongoose
  .connect(require('./config/keys').mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('database connected'))
  .catch(err => console.log(err));

// Get all items
app.get('/get_items', async (req, res) => {
  res.send(await Item.find());
});

// Add item
app.post('/add_item', (req, res) => {
  const { name, stock, gender, price, img, colors } = req.body
  const newItem = new Item({
    name,
    stock,
    gender,
    price,
    img,
    colors
  });
  newItem.save();
  res.send(newItem);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));