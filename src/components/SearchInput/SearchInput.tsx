import classes from './SearchInput.module.scss';

interface IProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<IProps> = ({ onChange }) => {
  return (
    <input
      type="search"
      placeholder="Place bird name here"
      className={classes.search}
      onChange={onChange}
    />
  );
};

export default SearchInput;
