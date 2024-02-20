import "./SearchResultList.css";
import SearchResultListItem from "./SearchResultListItem";

const SearchResultList = ({
  movieNames,
  selectedRow,
  setSelectedRow,
  scrollableRef,
  search,
  loading = false
}) => {
  return (
    <div ref={scrollableRef} className="SearchResultList">
      {
        // Print search results only when there are elements
        // in movie array and user did not press "Esc" key
        movieNames.length > 0 && movieNames[0]?.id !== -1
          ? movieNames.map((movieObj, i) => {
              return (
                <SearchResultListItem
                  key={movieObj.id}
                  selectedRow={selectedRow}
                  i={i}
                  setSelectedRow={setSelectedRow}
                  movieObj={movieObj}
                />
              );
            })
          : // Output "Movie not found" only if search is not loading
            // and user has entered a search value
            // else (user pressed "Esc" key) don't output anything
            !loading &&
            movieNames[0]?.id !== -1 &&
            search.length > 0 && (
              <SearchResultListItem
                key={0}
                selectedRow={1}
                i={0}
                setSelectedRow={setSelectedRow}
                movieObj={{ name: "Movie not found", id: 0 }}
              />
            )
      }
    </div>
  );
};

export default SearchResultList;
