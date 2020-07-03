import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public registerData: any;
  public loggedUser: any;
  public registeredCourses: any;
  private clientId = '4T3K4M520CPRWKHCFPSPISI002RC40VQEBISF3UJZJTGGES0';
  private clientSecret = '&client_secret=BOR4MT30WDA34W0YUEPA4B3GBLVKLQHBLBUHH0YVXETF0W4I';
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  placeFinder = (search) => {
    const url = 'https://api.foursquare.com/v2/venues/explore?client_id=' + this.clientId + this.clientSecret +
        '&v=20180323&limit=1&ll=40.7243,-74.0018&query=' + search;
    return this.http.get(url);
  }
  addUser(userData): Observable<any> {
    this.registerData = this.http.post('http://localhost:8080/api/register', userData ).pipe(
        map(this.extractData),
        catchError(this.handleError));
    return this.registerData;
  }
  getUser(user): Observable<any> {
    const url = 'http://localhost:8080/api/login';
    this.loggedUser = this.http.post(url, user, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
    return  this.loggedUser;
  }
  addSyllabus(syllabus): Observable<any> {
    return this.http.post('http://localhost:8080/api/syllabus', syllabus ).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  saveCode(code) {
    this.http.post('http://localhost:8080/api/saveCode', code ).subscribe( data => {
      console.log('Code : ' , data);
    });
  }
  /*addUserSyllabus(userId) {
    const url = 'http://localhost:8080/api/syllabus/' + userId;
    this.http.post(url, )
  }*/
  getUserSyllabus(userId): Observable<any> {
    const url = 'http://localhost:8080/api/getSyllabusByUserId/' + userId;
    this.registeredCourses = this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
    return  this.registeredCourses;
  }
  currentUser(): Observable<any> {
    return this.loggedUser;
  }
  logOutUser() {
    this.loggedUser = null;
    return  this.loggedUser;
  }
  updateUser(user): Observable<any>  {
    const url = 'http://localhost:8080/api/updateProfile';
    return this.http.put(url, user ).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
}
