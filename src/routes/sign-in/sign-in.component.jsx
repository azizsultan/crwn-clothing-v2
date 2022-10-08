import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    //console.log(user.uid);
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Pop Up</button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
