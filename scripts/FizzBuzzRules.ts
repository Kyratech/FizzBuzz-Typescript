export interface FizzBuzzRule {
    getId(): string;
    applyRuleIfNeeded(n: number, currentOutput: Array<string>): Array<string>;
}

abstract class MasterFizzBuzzRule implements FizzBuzzRule {
    protected abstract id: string;
    protected abstract multiple: number;
    
    public getId(): string {
        return this.id;
    }

    public applyRuleIfNeeded(n: number, currentOutput: Array<string>): Array<string> {
        if (this.numberIsRule(n)) {
            return this.executeRule(this.removeNumberFromOutput(n, currentOutput));
        }
        return currentOutput;
    }

    protected numberIsRule(n: number): boolean {
        return n % this.multiple === 0;
    }

    protected abstract executeRule(output: Array<string>): Array<string>;

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
    protected id = 'fizz';
    protected multiple = 3;

    protected executeRule(output: Array<string>): Array<string> {
        output.push("Fizz");
        return output;
    }
}

export class BuzzRule extends MasterFizzBuzzRule {
    protected id = 'buzz';
    protected multiple = 5;

    protected executeRule(output: Array<string>): Array<string> {
        output.push("Buzz");
        return output;
    }
}

export class BangRule extends MasterFizzBuzzRule {
    protected id = 'bang';
    protected multiple = 7;

    protected executeRule(output: Array<string>): Array<string> {
        output.push("Bang");
        return output;
    }
}

export class BongRule extends MasterFizzBuzzRule {
    protected id = 'bong';
    protected multiple = 11;

    protected executeRule(output: Array<string>): Array<string> {
        return ["Bong"];
    }
}

export class FezzRule extends MasterFizzBuzzRule {
    protected id = 'fezz';
    protected multiple = 13;

    protected executeRule(output: Array<string>): Array<string> {
        for(let i = 0; i < output.length; i++) {
            if (this.startsWithB(output[i])) {
                output.splice(i, 0, "Fezz");
                return output;
            }
        }
        output.push("Fezz");
        return output;
    }

    private startsWithB(s: string): boolean {
        return s.substring(0,1) === "B";
    }
}

export class ReverseRule extends MasterFizzBuzzRule {
    protected id = 'reverse';
    protected multiple = 17;
    
    //Do not remove any number if this rule applies
    public applyRuleIfNeeded(n: number, currentOutput: Array<string>): Array<string> {
        if (this.numberIsRule(n)) {
            return this.executeRule(currentOutput);
        }
        return currentOutput;
    }

    protected executeRule(output: Array<string>): Array<string> {
        output.reverse();
        return output;
    }
}