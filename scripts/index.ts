import {FizzBuzzRule, FizzRule, BuzzRule, BangRule, BongRule, FezzRule, ReverseRule} from './FizzBuzzRules';

const Rules: Array<FizzBuzzRule> = [new FizzRule(),
    new BuzzRule(),
    new BangRule(),
    new BongRule(),
    new FezzRule(),
    new ReverseRule()];

function FizzBuzz(): string {
    return FizzBuzzTo300();
}

function FizzBuzzTo300(): string {
    let str = "";
    
    for(let i = 1; i <= 300; i++) {
        str = str.concat(constructLine(i) + "<br/>");
    }
    
    return str;
}

function constructLine(n: number): string {
    let line: Array<string> = [n.toString()];

    for(let j = 0; j < Rules.length; j++) {
        line = Rules[j].applyRuleIfNeeded(n, line);
    }

    return line.join("");
}

document.body.innerHTML = FizzBuzz();