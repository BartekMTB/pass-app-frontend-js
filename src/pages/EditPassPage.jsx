import { Helmet } from "react-helmet";
import { EditPassForm } from "../features/passes/EditPassForm";
import css from "./NewPassPage.module.css";
import { useLocation } from "react-router-dom";

const EditPass = () => {
  // console.log("History.state after pushState: ", history.state);
  const location = useLocation();
  //var ID = loc.state._id;
  //console.log("heh", ID);
  return (
    <div className={css.main_div}>
      <Helmet>
        <title>New Pass</title>
      </Helmet>
      <h1>Please edit form field to update current Pass</h1>
      <EditPassForm _id={location.state._id} />
    </div>
  );
};

export default EditPass;
