let instructorWithLongestName = function(instructors) {
    // Put your solution here

    let thename=0
    let thelongest;

    for (let i=0;i<instructors.length;i++){
        if(instructors[i]["name"].length>thename){
            thename=instructors[i]["name"].length;
            thelongest=instructors[i]
            // console.log(instructors[i]["name"].length)

        }
    }
    return thelongest
  };
  


  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
        {name: "Jeremiah", course: "Web"},

    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));