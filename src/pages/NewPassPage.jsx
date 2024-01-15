import { Helmet } from "react-helmet";
import { PassForm } from "../features/passes/PassForm";
import css from "./NewPassPage.module.css";

const NewPass = () => {
  return (
    <div className={css.main_div}>
      <Helmet>
        <title>New Pass</title>
      </Helmet>
      <h1>Please fill out the form to create a new Pass</h1>
      <PassForm />
    </div>
  );
};

export default NewPass;
