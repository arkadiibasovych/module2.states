const Filter = ({ filter, changeFilter }) => (
  <label>
    Фильтр по имени <input type="text" value={filter} onChange={changeFilter} />
  </label>
);

export default Filter;
