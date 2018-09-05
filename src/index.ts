function FizzBuzz(): string {
    return FizzBuzzTo100();
}

function FizzBuzzTo100(): string {
    let str = "";
    for(let i = 1; i <= 100; i++) {
        str = str.concat(constructLine(i) + "<br/>");
    }
    return str;
}

function constructLine(i: number): string {
    if(!(Fizz(i) || Buzz(i))){
        return i.toString();
    }
    
    let line = "";
    if (Fizz(i)) {
        line = line.concat("Fizz");
    }
    if (Buzz(i)) {
        line = line.concat("Buzz");
    }
    return line;
}

function Fizz(i: number): boolean {
    return i % 3 === 0;
}

function Buzz(i: number): boolean {
    return i % 5 === 0;
}

document.body.innerHTML = FizzBuzz();