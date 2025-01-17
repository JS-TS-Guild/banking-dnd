import Bank from "./bank";
export default class Account {
    private accountNumber: number;
    private balance: number;
    private bank: Bank;

    constructor(accountNumber: number, bank: Bank) {
        this.accountNumber = accountNumber;
        this.balance = 0; 
        this.bank = bank;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (this.balance + (this.bank.allowNegativeBalance ? 0 : this.balance) >= amount) {
            this.balance -= amount;
        } else {
            throw new Error("Insufficient funds");
        }
    }

    getBalance(): number {
        return this.balance;
    }

    getAccountNumber(): number {
        return this.accountNumber;
    }
    getBank(): Bank{
        return this.bank;
    }

}