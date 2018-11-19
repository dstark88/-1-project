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
        // console.log("boxArray value and i value: ", boxArray[i], i);
        $(boxBtn).text(boxNum);
        $("#buttons").append(boxBtn);
    }
}

function findSmallest(lastIndex) {
    var smallest = 100;
    var iSpot = 0;
    for (var i = lastIndex; i < boxArray.length; i++) {
       if (smallest > boxArray[i]) {
            iSpot = i;
            smallest = boxArray[i];
            console.log("i", i, boxArray[i]);        
        }
        setTimeout(function() {
            findSmallest()},2000);
    }
    swap(iSpot, lastIndex);

}

function swap(index1, index2) {  
    var temp = boxArray[index1];
    boxArray[index1] = boxArray[index2];
    boxArray[index2] = temp;
}

$(".sort").on("click", function(event) {
    event.preventDefault();
    $("#buttons").empty();
    console.log(boxArray, "boxArray");

    for (var i = 0; i < randomNum; i++) { 
   
        findSmallest(i);
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
        // console.log("yes we are");

    }

});

