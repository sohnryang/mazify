var maze = {width: 0, height: 0};
var widthInputElem = document.getElementById("mazeWidth");
var heightInputElem = document.getElementById("mazeHeight");

function changeMazeSize(width, height) {
    maze.width = width;
    maze.height = height;
    var tableElem = document.body.querySelector("table");
    tableElem.innerHTML = "";
    for (var i = 0; i < height; i++) {
        var row = tableElem.appendChild(document.createElement("tr"));
        for (var j = 0; j < width; j++) {
            row.appendChild(document.createElement("td"));
        }
    }
}

widthInputElem.onchange = function() {
    changeMazeSize(widthInputElem.value, maze.height);
}

heightInputElem.onchange = function() {
    changeMazeSize(maze.width, heightInputElem.value);
}

changeMazeSize(widthInputElem.value, heightInputElem.value);
