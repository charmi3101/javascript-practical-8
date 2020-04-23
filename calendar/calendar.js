"use strict";
$(document).ready(function(){
    var getMonthText = function(currentMonth) {
        if (currentMonth === 0) { return "January"; }
        else if (currentMonth === 1) { return "February"; }
        else if (currentMonth === 2) { return "March"; }
        else if (currentMonth === 3) { return "April"; }
        else if (currentMonth === 4) { return "May"; }
        else if (currentMonth === 5) { return "June"; }
        else if (currentMonth === 6) { return "July"; }
        else if (currentMonth === 7) { return "August"; }
        else if (currentMonth === 8) { return "September"; }
        else if (currentMonth === 9) { return "October"; }
        else if (currentMonth === 10) { return "November"; }
        else if (currentMonth === 11) { return "December"; }
    };

    var getLastDayofMonth = function(currentMonth) {

        var lastDay = new Date();
        // Set the month to next month
        lastDay.setMonth( currentMonth + 1 );
        lastDay.setDate(0);

    return lastDay.getDate();

    };

var calendar = function(y,m){

    var firstDay = new Date(y, m, 1);
    var lastDayofmonth = getLastDayofMonth(m);
    var html = $("#calendar").html();
    var number = 0;

for (var i = 0; i < 6; i++) {

    html += "<tr>";
    for (let j = 0; j < 7; j++) {
    if (i === 0 && j < firstDay.getDay()) {
    html+="<td></td>";

    }
    else if(number>=lastDayofmonth){
    html+="<td></td>";
    }
    else   {
    number +=1;
    html+="<td>"+number+"</td>";

    }   

}

html += "</tr>";
if(number>=lastDayofmonth)
{
break;
}

}

$("#calendar").html(html);
$("#month_year").text(getMonthText(m)+""+y); 
}

calendar(2020,2); 

});
    

