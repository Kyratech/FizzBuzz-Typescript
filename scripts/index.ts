import {FizzBuzzRule, FizzRule, BuzzRule, BangRule, BongRule, FezzRule} from './FizzBussRules';

const Rules: Array<FizzBuzzRule> = [new FizzRule(), new BuzzRule(), new BangRule(), new BongRule(), new FezzRule()];

function FizzBuzz(): string {
    return FizzBuzzTo200();
}

function FizzBuzzTo200(): string {
    let str = "";
    
    for(let i = 1; i <= 200; i++) {
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