
randomNum = Math.floor(Math.random()*50)+1;
$(".randomNum").text(randomNum);

//create number range 
var numArray = [];

createBox();
  
function createBox() {
    
    for (var i = 0; i < randomNum; i++) {
        numArray.push(i);
    console.log("old number");
    // Create a variable equal to $("<button>");
    var boxBtn = $("<img>");
    boxBtn.attr("data-box", randomNum[i]);
    boxBtn.attr("src","https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=150&q=100");

    boxBtn.text(randomNum[i]);
    $("#buttons").append(boxBtn);
    }
} 
// function loopUnknownNub(){
//     for(var i = 0; i < unknownNum.length; ++ i){
//         console.log(unknownNum);
//     } 
// }
