var total = prompt('How many km are left to go?');

// Your code below:
var message;



if (total > 100) {
    message = ("Are we there yet?");
} else if (total >= 50) {
    message = ("We'll be there in 5 minutes");

} else if (total <= 49) {
    message = ("I'm Parking,I see you right now");
}