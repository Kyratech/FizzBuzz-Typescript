import {FizzBuzzRule, FizzRule, BuzzRule, BangRule, BongRule, FezzRule, ReverseRule} from './FizzBuzzRules';

const Rules: Array<FizzBuzzRule> = [new FizzRule(),
    new BuzzRule(),
    new BangRule(),
    new BongRule(),
    new FezzRule(),
    new ReverseRule()];

function RunFizzBuzz(): void {
    (document.getElementById('fizzbuzz-content')).innerHTML = FizzBuzz();
}

function FizzBuzz(): string {
    let n: number = parseInt((<HTMLInputElement>document.getElementById('no-results')).value);
    return FizzBuzzToN(n);
}

function FizzBuzzToN(n: number): string {
    let str = "";
    
    for(let i = 1; i <= n; i++) {
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

document.getElementById("fizzbuzz-form").addEventListener("submit", RunFizzBuzz, true);