import Food from "../models/foodModel.js";

export const createFood = async (req, res) => {
    try {
        const { foodTitle, description, img, price, category } = req.body;

        // Validate input
        if (!foodTitle || !description || !img || !price || !category) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create new food item
        const newFood = new Food({
            foodTitle,
            description,
            img,
            price,
            category
        });

        // Save to database
        const savedFood = await newFood.save();

        return res.status(201).json({
            message: 'Food item created successfully.',
            food: savedFood
        });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};



export const getFood = async (req, res) => {
    try {
        const foods = await Food.find(); // Fetch all food items from the database
        return res.status(200).json(foods);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Get food item by ID
export const foodDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const food = await Food.findById(id);

        if (!food) {
            return res.status(404).json({ message: 'Food item not found' });
        }

        return res.status(200).json(food);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};


// Update food item by ID
export const updateFood = async (req, res) => {
    try {
        const { id } = req.params; // Extract the food item ID from the request parameters
        const updatedData = req.body; // The new food data from the request body

        const updatedFood = await Food.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedFood) {
            return res.status(404).json({ message: 'Food item not found' });
        }

        return res.status(200).json(updatedFood);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Delete food item by ID
export const deleteFood = async (req, res) => {
    try {
        const { id } = req.params; // Extract the food item ID from the request parameters

        const deletedFood = await Food.findByIdAndDelete(id);

        if (!deletedFood) {
            return res.status(404).json({ message: 'Food item not found' });
        }

        return res.status(200).json({ message: 'Food item deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};
