function getColor(colorNumber = 0) {
    //make sure parameter is a number and not a string by converting the value to int:
    colorNumber = parseInt(colorNumber);
    switch (colorNumber) {
        case 1:
            return "red";
            break;
        case 2:
            return "yellow";
            break;
        case 3:
            return "blue";
            break;
        case 4:
            return "green";
            break;
        default:
            return "black";
            break;
    }
}

function getAllStudentColors() {


    var exampleColor = getColor(Math.floor(Math.random() * 4));
    let alumnos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i < alumnos.length; i++) {
        console.log(alumnos[i]);
    }




    return exampleColor;
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();