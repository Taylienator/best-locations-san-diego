

$(document).ready(function() {
    $.getJSON("data.json", function(data){
        

    topSpots = data;
  
  $(topSpots).each(function (index, element){

    let btn = "<button><a href=https://www.google.com/maps?q=" + this.location + ">Open in Google Maps Here</a></button";
    let tablerows = "<tr> <td>" + this.name + "</td><td>" + this.description + "</td><td>" + btn + "</td> </tr>";

    $("#tablerows").append(tablerows);
    
  })
 
    });
    
    
});

