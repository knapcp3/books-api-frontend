import { BookModel } from './API/Book.model';

export default interface ISearchBookState {
    randomTitle: string,
    bookFromId: BookModel,
    bookIdValue: string,
    bookFromParams: BookModel,
    bookParamsValue: string
}