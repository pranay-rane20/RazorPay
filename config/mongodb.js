const mongoose = require('mongoose');

function connectToDb() {

    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => {
            console.error('Failed to connect to MongoDB:', err.message); // Log the error message
            process.exit(1); // Exit the application if the connection fails
        });
}

module.exports = connectToDb;
