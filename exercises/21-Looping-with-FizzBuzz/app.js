function fizzBuzz() {
    for (var i = 0; i < 101; i++) {
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        elseif(i % 5 == 0) {
            console.log("Buzz");

        }
        elseif(i % 5 == 0 && i % 3 == 0); {
            console.log("FizzBuzz");

        }

        console.log(i);
    }


}

fizzBuzz();