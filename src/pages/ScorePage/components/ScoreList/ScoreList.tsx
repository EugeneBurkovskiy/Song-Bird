import classes from './ScoreList.module.scss';

interface IProps {
  data: string[];
  title: string;
}

const ScoreList: React.FC<IProps> = ({ data, title }) => {
  return (
    <section className={classes.column}>
      <h3 className={classes.column__title}>{title}</h3>
      <ul className={classes.column__content}>
        {data.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ScoreList;
