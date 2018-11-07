randomNum = Math.floor(Math.random()*20)+1;
$(".randomNum").text(randomNum);

//create number range 

var boxArray = [];

createBox();  
function createBox() {
    
    for (var i = 0; i < randomNum; i++) {

        var boxNum = Math.floor(Math.random()*100)+50;
        // $(".boxNum").text(boxNum);
        // var boxBtn = $("<img>"); 
        boxArray.push(boxNum); 

        // // boxNum = $("<img>");
        // // boxNum.attr("data-box", randomNum.length[i]);
        // // boxNum.attr("data-box", boxNum);
        //     console.log(boxNum, "boxNum");
        // // $("#display").text(boxBtn);
        // // var boxNum = $("<div>");
        // $("#buttons").append(newBox);
        // $("#buttons").append(boxNum);
        // // $("#buttons").append(boxBtn);
        var boxBtn = $("<img>");

        boxArray.push(boxNum); 

        // $(".boxNum").text(boxNum); 

        // Create a variable equal to $("<button>");
        //boxBtn.attr("data-box", boxNum);
        boxBtn.attr("src","https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=082a679c643048fc14e40049cb5bc7bb&auto=format&fit=crop&w=150&q=60");
        boxBtn.css({"background-image" : "url('./assets/images/owl.jpg')"});
        // boxBtn.attr("data-box", boxNum);
        console.log("boxArray value and i value: ", boxArray[i], i);
        //$("#display").text(boxBtn);
        $("#buttons").append(boxBtn)

    }
}
