const student = require('./models');
exports.createStudent = async(req,res) => {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(200).json(newStudent);
}
exports.createStudent()