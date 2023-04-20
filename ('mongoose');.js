const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/delivery-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the User model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Define a schema for the Order model
const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerAddress: {
    type: String,
    required: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    enum: ['pending', 'in progress', 'delivered'],
    default: 'pending',
  },
});

// Define the User and Order models
const User = mongoose.model('User', userSchema);
const Order = mongoose.model('Order', orderSchema);

// Example code to create a new user and save it to the database
const newUser = new User({
  email: 'example@example.com',
  password: 'password123',
});
newUser.save((err, user) => {
  if (err) {
    console.error(err);
  } else {
    console.log('User created successfully:', user);
  }
});

// Example code to create a new order and save it to the database
const newOrder = new Order({
  customerName: 'Richard Yemofio',
  customerAddress: 'Biofio 18 Labone',
  items: [
    {
      name: 'Pizza',
      quantity: 1,
    },
    {
      name: 'Salad',
      quantity: 2,
    },
  ],
});
newOrder.save((err, order) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Order created successfully:', order);
  }
});