import SearchInput from "./components/SearchInput";
import Header from "../main/components/Header";


export const revalidate = 0;

interface SearchProps {
  searchParams: { title: string }
};

const Search = async ({ searchParams }: SearchProps) => {

  return (
    <div 
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-bold">
            Search
          </h1>
          <SearchInput />
          <h2 className="text-white text-2xl font-semibold">From the huge collection of Music...</h2>
        </div>
      </Header>
      
    </div>
  );
}

export default Search;
