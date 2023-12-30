import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icontact } from '../models/icontact';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpclent: HttpClient) { }

  private serverUrl: string = 'http://localhost:3000'
  public getContact(): Observable<Icontact[]> {
    let url = `${this.serverUrl}/contacts`;
    return this.httpclent.get<Icontact[]>(url).pipe(catchError(this.handleError))
  }

  public getContactById(contactId: string): Observable<Icontact> {
    const dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpclent.get<Icontact>(dataUrl).pipe(catchError(this.handleError));
  }

  public addContacts(contact: Icontact): Observable<Icontact> {
    let dataUrl = `${this.serverUrl}/contacts`
    return this.httpclent.post<Icontact>(dataUrl, contact).pipe(catchError(this.handleError))
  }

  public updateContact(contactId: string, contact: Icontact): Observable<Icontact> {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`
    return this.httpclent.put<Icontact>(dataUrl, contact).pipe(catchError(this.handleError))
  }

  public deleteContactById(contactId: string): Observable<{}> {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`
    return this.httpclent.delete<{}>(dataUrl).pipe(catchError(this.handleError))
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error :${error.error.message};`
    }
    else {
      errorMessage = `Status :${error.status};`
    }
    return throwError(errorMessage);
  }

}


