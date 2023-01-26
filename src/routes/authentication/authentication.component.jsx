import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.style.scss";

const Authentication = () => {
  return (
    <>
      <div className="authentication-container">
        {/* <button onClick={logGoogleUser}>Sign In With Google Pop Up</button> */}
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default Authentication;
