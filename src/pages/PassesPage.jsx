import css from "./passesPage.module.css";
import { Helmet } from "react-helmet";
//import { useGetPassesQuery } from '../features/passes/passesApiSlice'
import { PassesList } from "../features/passes/PassesList";

const PassesHome = () => {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Passes list page</title>
      </Helmet>
      <div>
        <PassesList />
      </div>
    </div>
  );
};

export default PassesHome;
