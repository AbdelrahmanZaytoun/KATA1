
    let squareCode = function(message) {
        message = message.replace(/\s/g, '');







        var columns = Math.ceil(Math.sqrt(message.length));
        var i, j;
        var output = '';



        
        for(i = 0; i < columns; i++) {
          for(j = i; j < message.length; j += columns) {
            output += message[j];
          }
          if(i < columns - 1) {
            output += ' ';
          }
        }
        return output;
      };
      
      console.log(squareCode("chill out"));
      console.log(squareCode("feed the dog"));
      console.log(squareCode("have a nice day"));
      console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
      