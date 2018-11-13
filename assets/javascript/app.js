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

Array.min = function (boxArray) {
    return Math.min.apply(Math, boxArray);
};
var min = Array.min(boxArray);
console.log(min);

// swap();

function swap(array) {
    var temp = boxArray[0];
    var index = boxArray.indexOf(min);
     
    boxArray[0] = min;
    boxArray[index] = temp;
    console.log(min, temp);
}

$(".sort").on("click", function(event) {
    event.preventDefault();
    $("#buttons").empty();
    swap();
    for (var i = 0; i < randomNum; i++) {  
        var boxBtn = $("<div>");
        $(boxBtn).text(boxArray[i]);
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

