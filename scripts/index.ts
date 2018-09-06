import {FizzBuzzRule, FizzRule, BuzzRule, BangRule, BongRule, FezzRule, ReverseRule} from './FizzBuzzRules';

let Rules: Array<FizzBuzzRule> = [new FizzRule(),
    new BuzzRule(),
    new BangRule(),
    new BongRule(),
    new FezzRule(),
    new ReverseRule()];

function RunFizzBuzz(): void {
    SetRules();
    (document.getElementById('fizzbuzz-content')).innerHTML = FizzBuzz();
}

function SetRules(): void {
    Rules = [];
    
    if (IsChecked('fizz')) {
        Rules.push(new FizzRule());
    }

    if (IsChecked('buzz')) {
        Rules.push(new BuzzRule());
    }

    if (IsChecked('bang')) {
        Rules.push(new BangRule());
    }

    if (IsChecked('bong')) {
        Rules.push(new BongRule());
    }

    if (IsChecked('fezz')) {
        Rules.push(new FezzRule());
    }

    if (IsChecked('reverse')) {
        Rules.push(new ReverseRule());
    }
}

function FizzBuzz(): string {
    let n: number = parseInt((<HTMLInputElement>document.getElementById('no-results')).value);
    return FizzBuzzToN(n);
}

function IsChecked(elementId: string): boolean {
    return (<HTMLInputElement>document.getElementById(elementId)).checked;
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