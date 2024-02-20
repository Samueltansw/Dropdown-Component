import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const URL = "https://api.tvmaze.com/search/shows?q=";

const SyncSearchBar = ({
  search,
  setMovieNames,
  setSearch,
  handleKeyDown,
  loading = false,
  setLoading = () => {},
  isAsync = false
}) => {
  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      setMovieNames([]);

      const res = await fetch(URL + search);
      isAsync && (await new Promise((resolve) => setTimeout(resolve, 500)));
      const data = await res.json();

      setMovieNames(() => {
        const movieList = [];

        data.map((movieObj) => {
          movieList.push({
            name: movieObj.show.name,
            id: uuid()
          });
        });
        return movieList;
      });

      setLoading(false);
    };

    !search && setMovieNames([]);
    search && getData();
  }, [search]);

  const formId = uuid();

  return (
    <div className="input-wrapper">
      <label htmlFor={formId}>
        <FaSearch className="search-icon" />
      </label>
      <input
        type="text"
        id={formId}
        placeholder={isAsync ? "Async Search Movies" : "Sync Search Movies"}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      {loading && <AiOutlineLoading3Quarters className="loadingIcon" />}
    </div>
  );
};

export default SyncSearchBar;
