//Bank Statement export


class bankAccount {
    constructor(password, accountNumber, accountHolder, balance=0){
    this.password=password;
    this.accountNumber=accountNumber;
    this.accountHolder=accountHolder;
    this.balance=balance;
    }

//Authentication
    authenticate(password){
        if(password===this.password){
        console.log("Welcome, ${this.accountHolder}!");
        return true;
        }
        console.log("Incorrect Password.");
        return false;
        }

//Deposit method
    deposit(amount){
        this.balance+=amount;
        console.log("£${amount} deposited. Current balance: £${this.balance}");
        }

//Withdraw
    withdraw(amount){
        if(amount >this.balance){
        console.log("You have Insufficient funds");
        }else{
        this.balance-=amount;
        console.log("£${amount}withdrawn. Current bank account balance: £${this.balance}")
        }
        }

//Check Balance
    checkBalance(){
        console.log("Account balance for £${this.balance}")
        }
        }

export default bankAccount



