
const camelCase = function(input) {



    return input.replace(/\W+(.)/g, function(match, chr)
    {
         return chr.toUpperCase();
     });

    // Your code here
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));

