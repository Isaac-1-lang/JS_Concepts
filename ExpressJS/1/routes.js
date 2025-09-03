const express = require('express');
const app=express();
const dotenv=require('dotenv');
const students=[];
const PORT =process.env.PORT ||  3200;
app.use(express.json());
// Defining a class which will contain  Name and grade,getDetails method of the student

class Student {
  grade;
  Full_names;
  getDetails = function(name,grade) {
     this.Full_names=name;
     this.grade=grade;
  }
}
const student=new Student();
// Routes for creating a student and for getting all students
app.get('/students',(req,res)=> {
  res.send(students);
});
app.post('/students',(req,res)=> {

  const { name,grade } = req.body;
  students.push(student);
});

app.listen(PORT,()=> {
  console.log(`The app is running on port ${PORT}`);
});


