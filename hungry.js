function whatToDoForLunch(hungry, availableTime) {

    if (hungry === false ){
        console.log("Go Back To Work!")
    } else if (hungry === true && availableTime <20){
        console.log("pick something and eat!")
    } 

    else if (hungry === true && availableTime >=20 && availableTime <=30){
        console.log("try a place nearby")
    } 
    else {" you are in a bootcamp and that you should reconsider how much time we actually have to spare"}
 
}



whatToDoForLunch(true, 20);
