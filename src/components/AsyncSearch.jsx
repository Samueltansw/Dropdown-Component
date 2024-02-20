import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";
import { useState, useRef } from "react";
import useDebounce from "../hooks/useDebounce";

const AsyncSearch = () => {
  const [movieNames, setMovieNames] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRow, setSelectedRow] = useState(0);
  const scrollableRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 1000, setLoading);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" && selectedRow > 0) {
      setSelectedRow((prev) => prev - 1);
      if (scrollableRef.current) {
        scrollableRef.current.scrollBy({ top: -50 });
      }
    } else if (e.key === "ArrowDown" && selectedRow < movieNames.length - 1) {
      setSelectedRow((prev) => prev + 1);
      if (scrollableRef.current) {
        scrollableRef.current.scrollBy({ top: 50 });
      }
    } else if (e.key === "Escape") {
      // Add negative id to front of array to close search result list
      setMovieNames((prev) => [{ id: -1 }, ...prev]);
    }
  };

  return (
    <div className="search-bar-content">
      <SearchBar
        search={debouncedSearch}
        setSearch={setSearch}
        setMovieNames={setMovieNames}
        handleKeyDown={handleKeyDown}
        loading={loading}
        setLoading={setLoading}
        isAsync={true}
      />
      <SearchResultList
        movieNames={movieNames}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        scrollableRef={scrollableRef}
        search={search}
        loading={loading}
      />
    </div>
  );
};

export default AsyncSearch;
