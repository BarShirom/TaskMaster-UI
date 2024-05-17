import "./header.css";

const Header = ({ search, setSearch, isVisible, setIsVisible }) => {
  return (
    <div className="headerContainer">
      <div className="searchLabel">
        <label className="label" htmlFor="">
          Search
        </label>
      </div>
      <div className="searchInput">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="addBtn">
        <button onClick={() => setIsVisible(!isVisible)}>Add</button>
      </div>
    </div>
  );
};

export default Header;
