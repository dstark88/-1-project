randomNum = Math.floor(Math.random()*20)+1;
$(".randomNum").text(randomNum);

//create number range 

var boxArray = [];

createBox();  
function createBox() {
    
    for (var i = 0; i < randomNum; i++) {
        var newBox = $("<div>");

        var boxNum = Math.floor(Math.random()*100)+50;
        // $(".boxNum").text(boxNum); 
        boxArray.push(boxNum); 

        // boxNum = $("<img>");
        // boxNum.attr("data-box", randomNum.length[i]);
        // boxNum.attr("data-box", boxNum);
            console.log(boxNum, "boxNum");
        // $("#display").text(boxBtn);
        // var boxNum = $("<div>");
        $("#buttons").append(newBox);
        $("#buttons").append(boxNum);



    }
}
