import ISearchService from "./ISearchService";

export default interface ISearchFilterProps {
    searchService: ISearchService<any>;
    handleSelectedValue: (value: any) => void;
}