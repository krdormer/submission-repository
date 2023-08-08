const Filter = ({ value, onChange }) => (
  <div>
    filter shown with <input name="filter" onChange={onChange} value={value} />
  </div>
);

export default Filter;
