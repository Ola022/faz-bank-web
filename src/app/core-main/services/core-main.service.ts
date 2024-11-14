import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { BaseUrlService } from '../../base/base-url.service';
import { Signup } from '../../core/core.model';

@Injectable({
  providedIn: 'root'
})
export class CoreMainService {

  url: string = this.base._baseUrl;

  constructor(private http: HttpClient, private base: BaseUrlService) { }

  checkBalance(userId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/balance/${userId}`)
      .pipe(catchError((err) => this.base.errorHandler(err)));
  }

  transfer(userId: number, amount: number, recipientAccountNumber: number): Observable<any> {
    return this.http.post<any>(`${this.url}/transfer/${userId}`, { amount, recipient_account_number: recipientAccountNumber })
      .pipe(catchError((err) => this.base.errorHandler(err)));
  }

  withdraw(userId: number, amount: number): Observable<any> {
    return this.http.post<any>(`${this.url}/withdraw/${userId}`, { amount })
      .pipe(catchError((err) => this.base.errorHandler(err)));
  }

  deposit(userId: number, amount: number): Observable<any> {
    return this.http.post<any>(`${this.url}/deposit/${userId}`, { amount })
      .pipe(catchError((err) => this.base.errorHandler(err)));
  }

  airtimeSelf(userId: number, amount: number): Observable<any> {
    return this.http.post<any>(`${this.url}/airtime_self/${userId}`, { amount })
      .pipe(catchError((err) => this.base.errorHandler(err)));
  }

  airtimeOther(userId: number, amount: number, recipientPhoneNumber: string): Observable<any> {
    return this.http.post<any>(`${this.url}/airtime_other/${userId}`, { amount, recipient_phone_number: recipientPhoneNumber })
      .pipe(catchError((err) => this.base.errorHandler(err)));
  }


}
