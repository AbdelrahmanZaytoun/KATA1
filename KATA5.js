let urlEncode = function(text) {

    for (let i=0;i<text.length;i++){
         text =text.replace(" ","%20"); 
    
    }
    
    return text;
    
    
    };
      
      console.log(urlEncode("Lighthouse Labs"));
      console.log(urlEncode(" Lighthouse Labs "));
      console.log(urlEncode("blue is greener than purple for sure"));