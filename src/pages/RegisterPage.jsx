import { Helmet } from 'react-helmet';
import { RegisterForm } from '../features/auth/RegisterForm';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};
export default Register;
