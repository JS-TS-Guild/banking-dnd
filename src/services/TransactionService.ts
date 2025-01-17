
import Account from '../models/bank-account';

export default class TransactionService {
    /**
     * Transfers funds between two accounts.
     * @param fromAccount The account to debit.
     * @param toAccount The account to credit.
     * @param amount The amount to transfer.
     */
    static async transferFunds(fromAccount: Account, toAccount: Account, amount: number): Promise<void> {
        // Check if the accounts belong to the same bank
        if (fromAccount.getBank() !== toAccount.getBank()) {
            throw new Error("Cannot transfer between different banks.");
        }

        // Attempt to debit the fromAccount
        try {
            fromAccount.withdraw(amount);
            toAccount.deposit(amount);
            console.log(`Transferred ${amount} from ${fromAccount.getAccountNumber()} to ${toAccount.getAccountNumber()}`);
        } catch (error) {
            // Handle insufficient funds or other errors
            console.error(error.message);
            throw new Error("Transfer failed: " + error.message);
        }
    }
}
