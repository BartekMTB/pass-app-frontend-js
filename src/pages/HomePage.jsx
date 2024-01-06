import css from './homePage.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to passes app :)
      </h1>
    </div>
  );
};

export default Home;
