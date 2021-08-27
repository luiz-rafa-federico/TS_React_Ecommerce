import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ISearchProviderProps {
  children: ReactNode;
}

interface ISearchProviderData {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}

const SearchContext = createContext<ISearchProviderData>(
  {} as ISearchProviderData
);

export const SearchProvider = ({ children }: ISearchProviderProps) => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
