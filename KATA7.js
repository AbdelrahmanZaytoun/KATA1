


let checkAir = function (samples, threshold) {
    // Code here!
    thedirty=[]
    let percent=thedirty.length/samples.length
    for (let i=0;i<samples.length;i++){
        if (samples[i]==="dirty"){
            thedirty.push(samples[i])
           
        } 

        
        
       

    } 

    // console.log(thedirty.length/samples.length)

        if ((thedirty.length/samples.length) > threshold){

          console.log("polluted")} 
            
            else { console.log("clean")}
    
  };


  
  console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
  ));
  
  console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
  ));
  
  console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
  ))
