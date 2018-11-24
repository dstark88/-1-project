randomNum = Math.floor(Math.random() * (50 - 21)) + 21;
$(".randomNum").text(randomNum);
var boxArray = [];
createBox();
console.log("Original array: ", boxArray)
function createBox() {
    for (var i = 0; i < randomNum; i++) {
        var boxNum = Math.floor(Math.random() * (99)) + 1;
        var boxBtn = $("<div>");
        boxArray.push(boxNum);
        boxBtn.css({
            "background": "blue",
            "color": "white",
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
    for (let i = lastIndex; i < boxArray.length; i++) {
       if (smallest > boxArray[i]) {
            iSpot = i;
            smallest = boxArray[i];
            console.log("i", i, boxArray[i]);        
        }
        // setTimeout(function() {
        //     findSmallest()},2000);
    }
    // setInterval(function(){
        swap(iSpot, lastIndex);
    // }, 1000);
}
function swap(index1, index2) {  
    var temp = boxArray[index1];
    boxArray[index1] = boxArray[index2];
    boxArray[index2] = temp;
}
var index = 0; // emulates functionality of counter in for loop
$(".sort").on("click", function(event) {
    event.preventDefault();
    $("#buttons").empty();
    
    function evaluateIndex() {
        // only run code if index still yields value from array
        if (index < randomNum) {
            setTimeout(function() {
                findSmallest(index);
                $("#buttons").empty();
                for (var i = 0; i < randomNum; i++) {
                    var boxBtn = $("<div>");
                    boxBtn.css({
                        "background": "blue",
                        "color": "white",
                        "width": "70px",
                        "height": "70px",
                        "display": "inline-block",
                        "background-size": "cover",
                        "margin": "10px",
                        "line-height": "80px",
                        "font-size": "60px"
                    });
                    // console.log("boxArray value and i value: ", boxArray[i], i);
                    $(boxBtn).text(boxArray[i]);
                    $("#buttons").append(boxBtn);
                }
                index++; // add one to index
                evaluateIndex(); // and kick off recursive function again
            }, 400)
        }
    }
    evaluateIndex(); // kick off recursive function evaluateIndex to start looping through numbers

    // for (var i = 0; i < randomNum; i++) { 
   
    //     findSmallest(i);
    //     var boxBtn = $("<div>");
    //     $(boxBtn).text(boxArray[i]);
    //     boxBtn.css({
    //         "background": "green",
    //         "color": "white",
    //         "width": "70px",
    //         "height": "70px",
    //         "display": "inline-block",
    //         "background-size": "cover",
    //         "margin": "10px",
    //         "line-height": "80px",
    //         "font-size": "60px"
    //     });
    //     $("#buttons").append(boxBtn);
    //     // console.log("yes we are");
    // }
});