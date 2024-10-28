import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent implements OnInit{
 selectedTransaction: any; 
 displayedColumns: string[] = ['date', 'description', 'amount', 'action'];

 // Mock transaction data
 transactions = [
     { date: '10/22', description: 'Transfer to John', amount: 120.00 },
     { date: '10/21', description: 'Buy Airtime', amount: 15.00 },
     { date: '10/20', description: 'Salary Deposit', amount: 2500.00 },    
     { date: '10/22', description: 'Transfer to John', amount: 120.00 },
     { date: '10/21', description: 'Buy Airtime', amount: 15.00 },
     { date: '10/20', description: 'Salary Deposit', amount: 2500.00 },    
     { date: '10/22', description: 'Transfer to John', amount: 120.00 },
     { date: '10/21', description: 'Buy Airtime', amount: 15.00 },
     { date: '10/20', description: 'Salary Deposit', amount: 2500.00 },    
     { date: '10/22', description: 'Transfer to John', amount: 120.00 },
     { date: '10/21', description: 'Buy Airtime', amount: 15.00 },
     { date: '10/20', description: 'Salary Deposit', amount: 2500.00 },               
   ];
   
  ngOnInit(): void {
      this.viewDetails(this.transactions[0])
  }
   copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
        // You might want to show a notification or some feedback here.
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}
 
   viewDetails(transaction: any) {
     this.selectedTransaction = transaction; 
     
   }

  downloadReceipt() {
    if (this.selectedTransaction) {
      // Logic to download the receipt. This could be a PDF generation or a simple download link.
      const receiptData = `
        Bank: FAZ Bank
        Account Name: ORLAM OLA
        Account Number: ${this.selectedTransaction.accountNumber}
        Transaction ID: ${this.selectedTransaction.transactionId}
        Date: ${this.selectedTransaction.date}
        Description: ${this.selectedTransaction.description}
        Amount: ${this.selectedTransaction.amount }
      `;

      const blob = new Blob([receiptData], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `receipt-${this.selectedTransaction.transactionId}.txt`;
      link.click();
    }
  }
}
