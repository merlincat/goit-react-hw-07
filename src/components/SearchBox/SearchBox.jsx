import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter, selectFilterValue } from '../../redux/filtersSlice';

const SearchBox = () => {
  const filtersName = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  return (
    <div className={css.searchWrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={filtersName}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};
export default SearchBox;
