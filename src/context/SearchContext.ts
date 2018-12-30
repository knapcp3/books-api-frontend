import React from "react";

const SearchContext = React.createContext<any>({
    searchService: undefined
});


export const SearchProvider = SearchContext.Provider;
export const SearchConsumer = SearchContext.Consumer;