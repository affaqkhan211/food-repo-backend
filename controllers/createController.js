import User from './models/createUser.js';

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Check if all fields are present
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password,
      confirmPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
