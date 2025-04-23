import dotenv from 'dotenv';
import connectDB from './config/db.js';
import User from './models/user.model.js';

dotenv.config({ path: './config/config.env' });

// Connect to MongoDB
connectDB();

// Function to create a new user
const testUser = async () => {
    const newUser = await User.create({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johnDoe@gmail.com'
    })
    console.log('🎉 User created:', newUser)
}

testUser();