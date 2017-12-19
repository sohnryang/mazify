var maze = {width: 0, height: 0};

function changeMazeSize(width, height) {
    maze.width = width;
    maze.height = height;
    
}

document.body.querySelector("#mazeWidth").onchange = function() {
    changeMazeSize(document.body.querySelector("#mazeWidth").value, maze.height);
}

document.body.querySelector("#mazeHeight").onchange = function() {
    changeMazeSize(maze.width, document.body.querySelector("#mazeHeight").value);
}
