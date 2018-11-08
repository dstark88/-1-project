randomNum = Math.floor(Math.random()*20)+1;
$(".randomNum").text(randomNum);

var boxArray = [];

createBox(); 

function createBox() {
    for (var i = 0; i < randomNum; i++) {
        var boxNum = Math.floor(Math.random()*(99))+1;

        var boxBtn = $("<div>");

        boxArray.push(boxNum); 

        boxBtn.css({"background-image" : "url('./assets/images/blueBubbles.jpg')", "width" : "120px", "height" : "150px", "display" : "inline-block", "background-size" : "cover", "margin" : "10px", "line-height" : "150px", "font-size" : "120px"});
        console.log("boxArray value and i value: ", boxArray[i], i);
        $(boxBtn).text(boxNum);
        $("#buttons").append(boxBtn)        
    }
}
