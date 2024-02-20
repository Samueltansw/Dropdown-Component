const SearchResultListItem = ({ i, selectedRow, setSelectedRow, movieObj }) => {
  return (
    <div
      onClick={() => console.log("clicked")}
      className={
        selectedRow === i
          ? "SearchResultListItem active"
          : "SearchResultListItem"
      }
      onMouseOver={() => setSelectedRow(i)}
    >
      <label htmlFor={movieObj.id}>{movieObj.name}</label>
      {movieObj.name !== "Movie not found" && (
        <input type="checkbox" id={movieObj.id} />
      )}
    </div>
  );
};

export default SearchResultListItem;
