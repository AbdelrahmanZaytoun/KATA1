

let repeatNumbers = function(data) {

    for (let i=0;i<data.length;i++){
        for (let j=0;j<data[i].length;j++){
            let number = data[i][0];
            let repeat=data[i][1]
    
            let numberstring= number.toString()
    
           return numberstring.repeat(repeat).concat(",")}
    }
    
    
    
    
    
        // Put your solution here
      };
      
      console.log(repeatNumbers([[1, 10]]));
      console.log(repeatNumbers([[1, 2], [2, 3]]));
      console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));