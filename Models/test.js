import mongoose from "mongoose";
const TestSchema = mongoose.Schema({
    test_name:String
});

const Test= mongoose.model("test_master",TestSchema);
export default Test