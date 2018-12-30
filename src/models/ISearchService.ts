import { Observable } from "rxjs";

export default interface ISearchService<T> {
    search: (term: string) => void;
    fetchResults: (term: string) => Observable<T[]>;
    getResults: () => Observable<T[]>;
}