type SearchProps = {
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// const Search = ({ value, onChange }: SearchProps) => {
const Search = () => {
  return (
    <div className="mx-auto flex justify-center">
      <input type="text" placeholder="Search a product" className="bg-[#ECECEC] rounded-full px-5 py-3 w-[35rem]" />
    </div>
  );
};

export default Search;
