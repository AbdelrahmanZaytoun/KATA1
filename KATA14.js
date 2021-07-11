
let calculateChange = (total, cash) => {
    let over = cash - total;
    let change = {
        twentyDollar: 0,
        tenDollar: 0,
        fiveDollar:0,
        twoDollar:0,
        oneDollar:0,
        quarter:0,
        dime:0,
        nickel:0,
        penny:0

    };
    while(over > 0) {
      if(over > 2000) {
        change.twentyDollar += 1;
        over -= 2000;
      } else if(over > 1000) {
        change.tenDollar += 1;
        over -= 1000;
      } else if(over > 500) {
        change.fiveDollar += 1;
        over -= 500;
      } else if(over > 200) {
        change.twoDollar += 1;
        over -= 200;
      } else if(over > 100) {
        change.oneDollar += 1;
        over -= 100;
      } else if(over > 25) {
        change.quarter += 1;
        over -= 25;
      } else if(over > 10) {
        change.dime += 1;
        over -= 10;
      } else if(over > 5) {
        change.nickel += 1;
        over -= 5;
      } else if(over > 0) {
        change.penny += 1;
        over -= 1;
      }
      
    }
    

    return change;
  }
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));

