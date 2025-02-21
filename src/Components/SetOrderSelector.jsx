function SortOrderSelector({ sortBy, setSortBy, order, setOrder }) {
  return (
    <>
      <form>
        <label htmlFor="sortby" aria-label="Sort articles by">
          Sort by:
        </label>
        <select
          name="sortby"
          id="sortby"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          required
          aria-label="Sort by"
        >
          <option value="created_at">Date</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
          <option value="title">Title</option>
        </select>
      </form>

      <form>
        <label htmlFor="order" aria-label="Select order">
          Order:
        </label>
        <select
          name="order"
          id="order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          required
          aria-label="Select order"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </form>
    </>
  );
}

export default SortOrderSelector;
