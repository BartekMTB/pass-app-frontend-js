import { Helmet } from "react-helmet";
import { EditPassForm } from "../features/passes/EditPassForm";
import css from "./NewPassPage.module.css";
import { useLocation } from "react-router-dom";

const EditPass = () => {
  const location = useLocation();
  return (
    <div className={css.main_div}>
      <Helmet>
        <title>Edit Pass</title>
      </Helmet>
      <h1>Please edit form field to update current Pass</h1>
      <EditPassForm _id={location.state._id} />
    </div>
  );
};

export default EditPass;
