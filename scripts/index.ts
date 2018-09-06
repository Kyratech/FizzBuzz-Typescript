import {FizzBuzzRule, FizzRule, BuzzRule, BangRule} from './FizzBussRules';

const Rules: Array<FizzBuzzRule> = [new FizzRule(), new BuzzRule(), new BangRule()];

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

function constructLine(n: number): string {
    let line: Array<string> = [n.toString()];

    for(let j = 0; j < Rules.length; j++) {
        line = Rules[j].applyRuleIfNeeded(n, line);
    }

    return line.join("");
}

document.body.innerHTML = FizzBuzz();