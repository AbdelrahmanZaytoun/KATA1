
let numberOfVowels = function(data) {
  
    let total=[];
for (i=0;i<data.length;i++){
    if (data[i]==="a" || data[i]==="e" || data[i]==="i" || data[i]==="o" || data[i]==="u"){
        total.push(data[i])
        
    } 


}
return total.length

  };


  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));