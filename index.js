import BankAccount from './bankAccount.js';

//Create instances of Bank Account
const account1=new BankAccount(5555, 12345, "Jane Monroe", 5000);
const account2=new BankAccount(1111, 54321, "David Gee", 2000);

//Authenticate
account1.password;
account2.password;

//Deposit money
account1.deposit(500);
account2.deposit(200);

//Withdraw
account1.withdraw(300);
account2.withdraw(200);

//Checkbalance
account1.checkBalance();
account2.checkBalance();




