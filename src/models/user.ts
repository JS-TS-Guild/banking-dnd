import Account from "./bank-account";
export default class User {
    private name: string;
    private accounts: Account[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addAccount(account: Account): void {
        this.accounts.push(account);
    }

    transferFunds(fromAccount: Account, toAccount: Account, amount: number): void {
        if (fromAccount.getBank() === toAccount.getBank()) {
            try {
                fromAccount.withdraw(amount);
                toAccount.deposit(amount);
                console.log(`Transferred ${amount} from ${fromAccount.getAccountNumber()} to ${toAccount.getAccountNumber()}`);
            } catch (error) {
                console.error(error.message);
                // Logic to check other accounts in the same bank can be added here
            }
        } else {
            throw new Error("Cannot transfer between different banks");
        }
    }

}