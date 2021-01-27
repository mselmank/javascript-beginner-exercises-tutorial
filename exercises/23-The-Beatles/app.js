//Your code above ^^^

const sing = () => {

    var text2 = "words of widsom" + ",";
    var text3 = "There will be an answer" + ".";
    var text = "Let it be" + ",";


    var res = text.repeat(5).concat(text2, text.repeat(4), text3);

    return res;

}

console.log(sing());