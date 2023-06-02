import classes from './CategoryButton.module.scss';

interface IProps {
  title: string;
  onClick?: () => void;
  active?: boolean;
}

const CategoryButton: React.FC<IProps> = ({ title, active = false, onClick, ...args }) => {
  return (
    <button
      className={`${classes.category} ${active && classes.category_active}`}
      onClick={onClick}
      {...args}
    >
      {title}
    </button>
  );
};

export default CategoryButton;
