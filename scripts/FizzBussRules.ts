export interface FizzBuzzRule {
    applyRuleIfNeeded(n: number, currentOutput: Array<string>): Array<string>;
}

abstract class MasterFizzBuzzRule implements FizzBuzzRule {
    public applyRuleIfNeeded(n: number, currentOutput: Array<string>): Array<string> {
        if (this.numberIsRule(n)) {
            return this.executeRule(this.removeNumberFromOutput(n, currentOutput));
        }
        return currentOutput;
    }

    abstract numberIsRule(n: number): boolean;
    abstract executeRule(output: Array<string>): Array<string>;

    //If no previous rules are applied, the output should be a single number
    private removeNumberFromOutput(n: number, currentOutput: Array<string>): Array<string> {
        if (currentOutput.length === 1) {
            if (!isNaN(Number(currentOutput[0])))
            {
                return [];
            }
        }
        return currentOutput;
    }
}

export class FizzRule extends MasterFizzBuzzRule {
    numberIsRule(n: number): boolean {
        return n % 3 === 0;
    }

    executeRule(output: Array<string>): Array<string> {
        output.push("Fizz");
        return output;
    }
}

export class BuzzRule extends MasterFizzBuzzRule {
    numberIsRule(n: number): boolean {
        return n % 5 === 0;
    }

    executeRule(output: Array<string>): Array<string> {
        output.push("Buzz");
        return output;
    }
}

export class BangRule extends MasterFizzBuzzRule {
    numberIsRule(n: number): boolean {
        return n % 7 === 0;
    }

    executeRule(output: Array<string>): Array<string> {
        output.push("Bang");
        return output;
    }
}

export class BongRule extends MasterFizzBuzzRule {
    numberIsRule(n: number): boolean {
        return n % 11 === 0;
    }

    executeRule(output: Array<string>): Array<string> {
        return ["Bong"];
    }
}