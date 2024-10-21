import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CoreMainComponent } from './core-main.component';


export const coreMainRoutes: Routes = [
  {
    path: '',
    component: CoreMainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'transaction',
        loadChildren: () =>
          import('./transaction/transaction.module').then(
            (m) => m.TransactionModule
          ),
      },
      {
        path: 'cards',
        loadChildren: () =>
          import('./cards/cards.module').then(
            (m) => m.CardsModule
          ),
      },
    ]
  }, 
];

@NgModule({
  declarations: [    
    CoreMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(coreMainRoutes)
  ]
})

export class CoreMainModule { }
