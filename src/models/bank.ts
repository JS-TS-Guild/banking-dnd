export default class Bank {
    private name: string;
     allowNegativeBalance: boolean;

    constructor(name: string, allowNegativeBalance: boolean = false) {
        this.name = name;
        this.allowNegativeBalance = allowNegativeBalance;
    }

}