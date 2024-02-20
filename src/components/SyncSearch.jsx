import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";
import { useState, useRef } from "react";

const SyncSearch = () => {
  const [movieNames, setMovieNames] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRow, setSelectedRow] = useState(0);
  const scrollableRef = useRef(null);

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

  const updateMovieNames = (val) => {
    setMovieNames(val);
  };

  return (
    <div className="search-bar-content">
      <SearchBar
        search={search}
        setSearch={setSearch}
        setMovieNames={updateMovieNames}
        handleKeyDown={handleKeyDown}
      />
      <SearchResultList
        movieNames={movieNames}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        scrollableRef={scrollableRef}
        search={search}
      />
    </div>
  );
};

export default SyncSearch;
