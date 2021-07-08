let sumLargestNumbers = function(data) {
   
    let lnumber=data[0];
    let snumber=data[0];
    for (let i=0;i<data.length;i++){
        if (data[i]>lnumber){
            snumber=lnumber
            lnumber=data[i]
        } else if (data[i]>snumber){
            snumber=data[i]

        }

    }
   return lnumber +snumber

  };
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

