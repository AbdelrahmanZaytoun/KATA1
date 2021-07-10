

var talkingCalendar = function(date) {
    var allmonths = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"];
    var result = new Date(date);
    var year = result.getFullYear(result); // Taking the Year
    var month = allmonths[(result.getMonth(date))]; // Taking the Month
    var day = result.getDate(); // taking the Day
    var console;
    if (day % 10 === 1 && (day/10 === 1 || 2 || 3)) {
        switch (day){
            case 11:
             console = month + " " + day + "th, " + year;
            break;
            case 0:
             console = month + "31st, " + year;
            break;
            default:
             console = month + " " + day + "st, " + year;
      }
    } else if(day % 10 === 2 && (day/10 === 1 || 2 || 3)){
          switch (day){
            case 12:
             console = month + " " + day + "th, " + year;
            break;
            default:
             console = month + " " + day + "nd, " + year;
        }
    } else if(day % 10 === 3 && (day/10 === 1 || 2 || 3)){
          switch (day){
            case 13:
             console = month + " " + day + "th, " + year;
            break;
            default:
             console = month + " " + day + "rd, " + year;
        }
    } else {
         console = month + " " + day + "th, " + year; 
      }
    return console;
  };
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));