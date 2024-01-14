import { Helmet } from "react-helmet";
import { PassForm } from "../features/passes/PassForm";

const NewPass = () => {
  return (
    <div>
      <Helmet>
        <title>New PASS</title>
      </Helmet>
      <p>newpass</p>
      <PassForm />
    </div>
  );
};

export default NewPass;
