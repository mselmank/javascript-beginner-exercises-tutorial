// Your code here:



var str = ["Bottles of milk on the wall", "bottles of milk", "Take one down,pass it around", "No more bottles of milk on the wall, no more bottles of milk ", "Go to the store and buy some more, 99 bottles of milk on the wall."];


for (let index = 99; index >= 1; index--) {
    console.log(index + str[0] + "," + index + "," + str[1] + "." + str[2] + (index - 1) + str[0]);

}