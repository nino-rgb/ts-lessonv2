export class BankAccount {
  private balance: number;
  private accountNumber: string;

  public bankName: string;

  constructor(accountNumber: string, initialBalance: number = 0, bankName: string = "MyBank") {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.bankName = bankName;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`${amount}円 預金しました｡ 現在の残高は ${this.balance}円です｡ `);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("エラー : 残高が不足しています!");
    } else {
      this.balance -= amount;
      console.log(`${amount}円 引き出しました｡ 現在の残高は ${this.balance}円です｡ `);
    }
  }

  checkBalance(): void {
    console.log(`口座番号: ${this.accountNumber}, 現在の残高は: ${this.balance}円です｡ `);
  }
}

const myAccount = new BankAccount("12345-6789", 1000);

myAccount.checkBalance();
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(5000);
//myAccount.balance = 10000000;  // エラー: 'balance' は private であり、クラス 'BankAccount' 内でのみアクセス可能です。
