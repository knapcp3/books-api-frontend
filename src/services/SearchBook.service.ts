// import axios, { AxiosPromise } from "axios";
import config from "./../config";
import { from, of } from "rxjs";
import { Subject, Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { IBook } from "./../models/API/Book.model";

export default class SearchBookService {
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

    const promise: any = fetch(
      `${config.baseUrl}/api/book/?param=${term}`
    ).then(res => res.json());

    return from(promise);
  }

  getResults(term: string): Observable<IBook[]> {
    return this.searchTerms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.fetchResults(term))
    );
  }
}
