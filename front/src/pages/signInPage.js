
import React, { useEffect } from "react";
import Card from "../components/UI/Card";
import { signIn } from "./utils/nevOptions";
import SignInFrom from "../components/users/SignInForm"

const SignInPage = (props) => {

  return (
  <Card>
    <SignInFrom/>
  </Card>);
};

export default SignInPage;
