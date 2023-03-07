
const mongoose = require('mongoose');
const User = require('../models/user');

// Define a function to insert a user into the database
const createUser = async () => {
  try {
    // Connect to the database
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Define the user object
    const user = new User({
      username: 'jaris',
      name: 'Jari',
      password: 'jailman',
    });

    // Save the user to the database
    await user.save();

    console.log('User saved to database');
  } catch (error) {
    console.error(error);
  } finally {
    // Disconnect from the database
    mongoose.connection.close();
  }
};

module.exports = createUser;