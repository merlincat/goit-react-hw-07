import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
const SearchBox = () => {
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();
  return (
    <div className={css.searchWrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={filters.name}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};
export default SearchBox;
