import css from './passesPage.module.css';
import { Helmet } from 'react-helmet';
//import { useGetPassesQuery } from '../features/passes/passesApiSlice'
import { Passes} from '../features/passes/Passes'


const PassesHome = () => {
  return (
    <div className={css.container}>
    <Helmet>
      <title>Passes list page</title>
    </Helmet>
      <div>
        <Passes/>
      </div>
    </div>
  );
};

export default PassesHome
