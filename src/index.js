function FizzBuzz() {
    return FizzBuzzTo100();
}
function FizzBuzzTo100() {
    var str = "";
    for (var i = 1; i <= 100; i++) {
        str = str.concat(constructLine(i) + "<br/>");
    }
    return str;
}
function constructLine(i) {
    if (!(Fizz(i) || Buzz(i))) {
        return i.toString();
    }
    var line = "";
    if (Fizz(i)) {
        line = line.concat("Fizz");
    }
    if (Buzz(i)) {
        line = line.concat("Buzz");
    }
    return line;
}
function Fizz(i) {
    return i % 3 === 0;
}
function Buzz(i) {
    return i % 5 === 0;
}
document.body.innerHTML = FizzBuzz();
