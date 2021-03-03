import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
  
  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');

    // HttpClient.get() returns an observable
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id =${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
