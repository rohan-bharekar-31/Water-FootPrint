const mongoose = require('mongoose');

// Define Product Schema
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  water_footprint: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    default: 'liters/kg'
  }
});

// Create Product Model
const Product = mongoose.model('Product', ProductSchema);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/waterfootprint', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    insertData(); // Call the function to insert data
  })
  .catch(err => console.log(err));

// Function to insert data
const insertData = async () => {
  try {
    const products = [
      { name: 'Abaca fibre', water_footprint: 22654 },
      { name: 'Agave fibres', water_footprint: 6549 },
      { name: 'Almonds, shelled or peeled', water_footprint: 16095 },
      { name: 'Almonds, with shell', water_footprint: 8047 },
      { name: 'Anise', water_footprint: 8280 },
      { name: 'Apple juice', water_footprint: 1141 },
      { name: 'Apples, dried', water_footprint: 6847 },
      { name: 'Apples, fresh', water_footprint: 822 },
      { name: 'Apricots', water_footprint: 1287 },
      { name: 'Areca nuts', water_footprint: 11165 },
      { name: 'Artichokes', water_footprint: 818 },
      { name: 'Asparagus', water_footprint: 2150 },
      { name: 'Avocados', water_footprint: 1981 },
      { name: 'Badian', water_footprint: 8280 },
      { name: 'Bananas', water_footprint: 790 },
      { name: 'Barley', water_footprint: 1423 },
      { name: 'Barley, rolled or flaked grains', water_footprint: 1977 },
      { name: 'Beans, dry', water_footprint: 5053 },
      { name: 'Beans, green', water_footprint: 561 },
      { name: 'Beef', water_footprint: 15415, unit: 'liters/steak' },
      { name: 'Beer', water_footprint: 298, unit: 'liters/liter' },
      { name: 'Blueberries', water_footprint: 845 },
      { name: 'Bread (wheat)', water_footprint: 1608 },
      { name: 'Broad beans, dry', water_footprint: 2018 },
      { name: 'Broccoli', water_footprint: 285 },
      { name: 'Brussels sprouts', water_footprint: 285 },
      { name: 'Buckwheat', water_footprint: 3142 },
      { name: 'Butter', water_footprint: 5553 },
      { name: 'Cabbages', water_footprint: 280 },
      { name: 'Cane molasses', water_footprint: 527 },
      { name: 'Cardamoms', water_footprint: 34319 },
      { name: 'Carobs', water_footprint: 5594 },
      { name: 'Carrots', water_footprint: 195 },
      { name: 'Cashew apple', water_footprint: 3793 },
      { name: 'Cashew nuts', water_footprint: 14218 },
      { name: 'Cassava', water_footprint: 564 },
      { name: 'Cassava flour', water_footprint: 1878 },
      { name: 'Cassava starch', water_footprint: 2254 },
      { name: 'Cheese', water_footprint: 5060 },
      { name: 'Cherries', water_footprint: 1604 },
      { name: 'Chestnuts', water_footprint: 2750 },
      { name: 'Chick peas', water_footprint: 4177 },
      { name: 'Chicken meat', water_footprint: 4325 },
      { name: 'Chillies and peppers, dry', water_footprint: 7365 },
      { name: 'Chocolate', water_footprint: 17196 },
      { name: 'Cinnamon', water_footprint: 15526 },
      { name: 'Clementine', water_footprint: 748 },
      { name: 'Cloves', water_footprint: 61205 },
      { name: 'Cocoa beans', water_footprint: 19928 },
      { name: 'Coconut fibre', water_footprint: 2449 },
      { name: 'Coconut oil', water_footprint: 4490 },
      { name: 'Coconuts, dehusked', water_footprint: 2687 },
      { name: 'Coconuts, with husk', water_footprint: 1256 },
      { name: 'Coffee, green', water_footprint: 15897 },
      { name: 'Coffee, roasted', water_footprint: 18925 },
      { name: 'Cotton fabric', water_footprint: 9982 },
      { name: 'Cotton lint', water_footprint: 9113 },
      { name: 'Cotton seeds', water_footprint: 1332 },
      { name: 'Cottonseed oil', water_footprint: 3957 },
      { name: 'Egg', water_footprint: 3265 },
      { name: 'Fennel', water_footprint: 8280 },
      { name: 'Garlic', water_footprint: 589 },
      { name: 'Goat meat', water_footprint: 5521 },
      { name: 'Grapes', water_footprint: 608 },
      { name: 'Hazelnuts, shelled or peeled', water_footprint: 10515 },
      { name: 'Hazelnuts, with shell', water_footprint: 5258 },
      { name: 'Lamb', water_footprint: 10412 },
      { name: 'Lemons', water_footprint: 642 },
      { name: 'Lentils', water_footprint: 5874 },
      { name: 'Linseed', water_footprint: 5168 },
      { name: 'Maize', water_footprint: 1222 },
      { name: 'Mangoes', water_footprint: 1800 },
      { name: 'Milk', water_footprint: 1020 },
      { name: 'Millet', water_footprint: 4478 },
      { name: 'Mustard seeds', water_footprint: 2809 },
      { name: 'Natural rubber', water_footprint: 13748 },
      { name: 'Olive oil', water_footprint: 14726 },
      { name: 'Oranges', water_footprint: 560 },
      { name: 'Peas, dry', water_footprint: 1979 },
      { name: 'Pineapples', water_footprint: 255 },
      { name: 'Pistachios', water_footprint: 11363 },
      { name: 'Plantains', water_footprint: 1602 },
      { name: 'Pork', water_footprint: 5988 },
      { name: 'Potatoes', water_footprint: 287 },
      { name: 'Rice', water_footprint: 2497 },
      { name: 'Safflower seeds', water_footprint: 7221 },
      { name: 'Sesame oil', water_footprint: 21793 },
      { name: 'Sugar, refined', water_footprint: 1782 },
      { name: 'Sunflower seed oil', water_footprint: 6792 },
      { name: 'Tea, green and black', water_footprint: 8856 },
      { name: 'Tomatoes', water_footprint: 214 },
      { name: 'Vanilla beans', water_footprint: 126505 },
      { name: 'Walnuts, shelled or peeled', water_footprint: 9280 },
      { name: 'Watermelons', water_footprint: 235 },
      { name: 'Wheat', water_footprint: 1827 }
    ];

    await Product.insertMany(products);
    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    mongoose.connection.close();
  }
};
