
    function generateBoard(whiteQueen, blackQueen){
        let blackndwhite = [[],[],[],[],[],[],[],[]];
    
        for ( let y = 0 ; y < 8 ; y ++){
   
        for (let x = 0 ; x < 8 ; x ++){
            if (whiteQueen[0] == x && whiteQueen[1] == y){
                blackndwhite[y].push ("1");}
                else if(blackQueen[0] == x && blackQueen[1] == y){
        blackndwhite[y] += 1;
        }else{
        blackndwhite[y] += 0;
        }
        }
        }
        return blackndwhite;
        };

        let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));