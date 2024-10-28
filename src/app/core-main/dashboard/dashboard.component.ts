import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // Define the columns to be displayed
  displayedColumns: string[] = ['date', 'description', 'amount'];

  // Mock transaction data
  transactions = [
      { date: '10/22', description: 'Transfer to John', amount: 120.00 },
      { date: '10/21', description: 'Buy Airtime', amount: 15.00 },
      { date: '10/20', description: 'Salary Deposit', amount: 2500.00 },               
    ];

  constructor() { }

  ngOnInit(): void {
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
        // You might want to show a notification or some feedback here.
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

}
