import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 5, max: 25 },
    fees: { type: Number, required: true,min: 5000 ,max:10000},
    join: { type: Date, default: Date.now }
})

const StudentModel = mongoose.model('student', StudentSchema);

export default StudentModel;