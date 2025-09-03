function getTeacher(username,callback) {
    setTimeout(()=> {
        const teacher = { id: "SM", username: username, name: "Tim Smith", email: "tim@domain.com" };
        callback(teacher);
    },1000)
}

function getCourseByTeacher(teacherId,callback) {
    setTimeout(()=> {
        const course = { courseId: "JS001", name: "Javascript", teacher: teacherId };
        callback(course);
    },1000)
}

function getMarksByCourse(course,callback) {
    setTimeout(()=> {
        const marks = { course: course, markScored: 70, marker: course.teacher, markOutOf: 100 };
        callback(marks);
    },1000)
}

getTeacher("SM",(teacher)=> {
    console.log(teacher);
    getCourseByTeacher(teacher.id,(course)=> {
        console.log(course);
        getMarksByCourse(course,(marks)=> {
            console.log(marks);
        })
    })
})


// Using promises
function getTeacher(username) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            const teacher = { id: "SM", username: username, name: "Tim Smith", email: "tim@domain.com" };
            console.log("Step 1: Got username -", teacher.username);
            resolve(teacher);
        },1000)
    })
}

function getCourseByTeacher(teacherId) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            const course = { courseId: "JS001", name: "Javascript", teacher: teacherId };
            console.log("Step 2: Got course -", course.name);
            resolve(course);
        },1000)
    })
}

function getMarksByCourse(course) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            const marks = { course: course, markScored: 70, marker: course.teacher, markOutOf: 100 };
            console.log("Step 3: Got marks -", marks.markScored);
            resolve(marks);
        },1000)
    })
}


async function getMarks() {
    const teacher = await getTeacher("SM");
    const course = await getCourseByTeacher(teacher.id);
    const marks = await getMarksByCourse(course);
    console.log(marks);
}
getMarks();

