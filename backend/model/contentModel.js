import mongoose from 'mongoose';

const contentSchema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    tags: { type: Array, required: true },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date }
});

export default mongoose.model('Content',contentSchema);