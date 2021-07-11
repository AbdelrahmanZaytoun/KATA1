blocksAway = function(directions) {

    for (let i=0;i<directions.length;i+=2){
       let thedirection= directions[i]
       let number=typeof(1)

       console.log(typeof(thedirection[i]))
        if (thedirection==="right"){
           console.log(directions[i])

        }

        else if (thedirection==="left"){
            console.log(directions[i])

        }

        else if (typeof(thedirection)===number){
            console.log(directions[i])

        }
    }




    // really can't solve this one !
  };
  
  console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
  
  console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
  console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
