import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    foodTitle: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String, // Store the image URL
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    category: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // Automatically creates `createdAt` and `updatedAt` fields
});

const Food = mongoose.model('Food', foodSchema);

export default Food; 