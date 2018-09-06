import {FizzBuzzRule, FizzRule, BuzzRule, BangRule, BongRule, FezzRule, ReverseRule, CustomRule} from './FizzBuzzRules';

let AllRules: Array<FizzBuzzRule> = [new FizzRule(),
    new BuzzRule(),
    new BangRule(),
    new BongRule(),
    new FezzRule(),
    new ReverseRule()];

function RunFizzBuzz(): void {
    let currentRules: Array<FizzBuzzRule> = SetRules();
    (document.getElementById('fizzbuzz-content')).innerHTML = FizzBuzz(currentRules);
}

function SetRules(): Array<FizzBuzzRule> {
    let currentRules: Array<FizzBuzzRule> = [];
    
    for(let i = 0; i < AllRules.length; i++) {
        if(IsChecked(AllRules[i].getId())) {
            currentRules.push(AllRules[i]);
        }
    }

    if(IsChecked('Custom')) {
        currentRules.push(GenerateCustomRule());
    }

    return currentRules;
}

function FizzBuzz(currentRules: Array<FizzBuzzRule>): string {
    let n: number = parseInt((<HTMLInputElement>document.getElementById('no-results')).value);
    return FizzBuzzToN(n, currentRules);
}

function IsChecked(elementId: string): boolean {
    return (<HTMLInputElement>document.getElementById(elementId)).checked;
}

function GenerateCustomRule(): FizzBuzzRule {
    let customNumber: number = parseInt((<HTMLInputElement>document.getElementById('custom-number')).value);
    let customText: string = (<HTMLInputElement>document.getElementById('custom-text')).value;
    return new CustomRule(customText, customNumber);
}

function FizzBuzzToN(n: number, currentRules: Array<FizzBuzzRule>): string {
    let str = "";
    
    for(let i = 1; i <= n; i++) {
        str = str.concat(constructLine(i, currentRules) + "<br/>");
    }
    
    return str;
}

function constructLine(n: number, currentRules: Array<FizzBuzzRule>): string {
    let line: Array<string> = [n.toString()];

    for(let j = 0; j < currentRules.length; j++) {
        line = currentRules[j].applyRuleIfNeeded(n, line);
    }

    return line.join("");
}

document.getElementById("fizzbuzz-form").addEventListener("submit", RunFizzBuzz, true);