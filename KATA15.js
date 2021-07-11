
const organizeInstructors = function(instructors) {
    let organizingByCourse = {};
    
    for (let i = 0; i < instructors.length; i++) {
      let courseName = instructors[i].course;
        if (courseName in organizingByCourse) {
        organizingByCourse[courseName].push(instructors[i].name);
    } else {
        organizingByCourse[courseName] = [instructors[i].name]
    }
    }
    return organizingByCourse;
    };
    
    console.log(organizeInstructors([
      {name: "Samuel", course: "iOS"},
      {name: "Victoria", course: "Web"},
      {name: "Karim", course: "Web"},
      {name: "Donald", course: "Web"}
    ]));
    console.log(organizeInstructors([
      {name: "Brendan", course: "Blockchain"},
      {name: "David", course: "Web"},
      {name: "Martha", course: "iOS"},
      {name: "Carlos", course: "Web"}
    ]));