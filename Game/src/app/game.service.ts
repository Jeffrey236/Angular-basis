import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IGame } from './game';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  private SERVER_URL = '../assets/data/games.json';


  constructor(private httpClient: HttpClient) { }

  public getHeroes(): Observable<IGame []> {
    return this.httpClient.get<IGame []>(this.SERVER_URL)
                          .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Error server');
  }
}
