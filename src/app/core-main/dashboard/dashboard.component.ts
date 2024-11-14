import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from '../../app.service';
import { Constant } from '../../resources/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  userInfo: any;
  
  displayedColumns: string[] = ['date', 'description', 'amount'];  
  transactions = [
      { date: '10/22', description: 'Transfer to John', amount: 120.00 },
      { date: '10/21', description: 'Buy Airtime', amount: 15.00 },
      { date: '10/20', description: 'Salary Deposit', amount: 2500.00 },               
    ];  

  constructor(
    private app: AppService,
    private dialog: MatDialog,
    
  ) {
    this.userInfo = this.app.getFromStore(Constant.USER_INFO);

   }

  ngOnInit(): void {
  }

 
copyToClipboard() {
  navigator.clipboard.writeText(this.userInfo.account_number)
    .then(() => {
      console.log('Copied to clipboard:', this.userInfo.account_number);
      
      // Show the snackbar notification
      this.app.snackbar.open('Account number copied to clipboard!', 'Close', {
        duration: 3000, // Duration in milliseconds (3 seconds here)
        verticalPosition: 'bottom', // You can use 'top' or 'bottom'
        horizontalPosition: 'center' // You can use 'start', 'center', 'end', 'left', or 'right'
      });
    })
    .catch(err => {
      console.error('Failed to copy:', err);
      
      // Optionally show an error message if the copy fails
      this.app.snackbar.open('Failed to copy account number. Please try again.', 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    });
}
}
