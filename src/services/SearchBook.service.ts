import axios from "axios";
import config from "./../config";
import { from, of } from "rxjs";
import { Subject, Observable } from "rxjs";
import { debounceTime, switchMap } from "rxjs/operators";
import { IBook } from "./../models/API/Book.model";
import ISearchService from "./../models/ISearchService";

export default class SearchBookService implements ISearchService<IBook> {
  searchTerms: Subject<string>;
  results$: Observable<IBook[]>;

  constructor() {
    this.searchTerms = new Subject<string>();
    this.results$ = new Observable<IBook[]>();
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  fetchResults(term: string): Observable<IBook[]> {
    if (!term.trim()) {
      return of([]);
    }
    const promise: any = axios
      .get(`${config.baseUrl}/api/book/?param=${term}`)
      .then(res => res.data);

    return from(promise);
  }

  getResults(): Observable<IBook[]> {
    return this.searchTerms.pipe(
      debounceTime(400),
      switchMap(term => this.fetchResults(term))
    );
  }
}
