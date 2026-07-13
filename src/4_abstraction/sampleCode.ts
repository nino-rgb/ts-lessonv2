//インターフェースの作成
interface Payment {
  processPayment(amount: number): void;
}

//クレカ決済クラス
class CreditCardPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`クレジットカードで${amount}円の支払い処理をしています...`);
  }
}

class PayPalPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`PayPalで${amount}円の支払い処理をしています...`);
  }
}

//課題回答
class PayPayPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`PayPayで${amount}円 払います`);
  }
}

const totalAmount = 5000;

//課題回答追加済
const myPayments: Payment[] = [new CreditCardPayment(), new PayPalPayment(), new PayPayPayment()];

console.log("--- 決済テスト開始 ---");
for (const payment of myPayments) {
  payment.processPayment(totalAmount);
}
//実行結果
//--- 決済テスト開始 ---
// クレジットカードで 5000円 の支払いを処理しています...
// PayPalで 5000円 の支払いを処理しています...
//PayPayで5000円 払います
