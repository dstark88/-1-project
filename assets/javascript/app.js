randomNum = Math.floor(Math.random() * (50 - 21)) + 21;
$(".randomNum").text(randomNum);

var boxArray = [];

createBox();

function createBox() {
    for (var i = 0; i < randomNum; i++) {
        var boxNum = Math.floor(Math.random() * (99)) + 1;
        var boxBtn = $("<div>");

        boxArray.push(boxNum);

        boxBtn.css({
            "background-image": "url('./assets/images/blueBubbles.jpg')",
            "width": "70px",
            "height": "70px",
            "display": "inline-block",
            "background-size": "cover",
            "margin": "10px",
            "line-height": "80px",
            "font-size": "60px"
        });
        console.log("boxArray value and i value: ", boxArray[i], i);
        $(boxBtn).text(boxNum);
        $("#buttons").append(boxBtn);
    }
}


function findSmallest() {
    var smallest = 100;
    var iSpot = 0;
    for (var i = 0; i < boxArray.length; i++) {
       if (smallest > boxArray[i]) {
            iSpot = i;
            smallest = boxArray[i];
            console.log("i", i, boxArray[i]);
            // swap();
        // } if (smallest > boxArray[i]) {
        //     boxArray = i;
        // } else {
        
        }
    }
}
var sorted = [];
var done = sorted.concat(boxArray);
function swap(index) {
    
    Array.min = function (boxArray) {
        return Math.min.apply(Math, boxArray);
    };
    var min = Array.min(boxArray);
    console.log(min);
    var temp = boxArray[index];
    var minIndex = boxArray.indexOf(min);
     
    boxArray[index] = min;
    boxArray[minIndex] = temp;
    console.log(min, temp);
    // sorted.push(min);
    // boxArray.slice();
}

$(".sort").on("click", function(event) {
    event.preventDefault();
   
    $("#buttons").empty();
    // swap();
    console.log(boxArray, "boxArray");
    for (var i = 0; i < randomNum; i++) { 
         swap(i); 
        // findSmallest();
        var boxBtn = $("<div>");
        $(boxBtn).text(done[i]);
        boxBtn.css({
            "background-image": "url('./assets/images/blueBubbles.jpg')",
            "width": "70px",
            "height": "70px",
            "display": "inline-block",
            "background-size": "cover",
            "margin": "10px",
            "line-height": "80px",
            "font-size": "60px"
        });
        $("#buttons").append(boxBtn);
        console.log("yes we are");
    }
    // setTimeout(function() {
    //     resetGame()},1000);
});

