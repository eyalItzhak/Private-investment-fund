
import React, { useEffect } from "react";
import Card from "../components/UI/Card";
import { signIn } from "./utils/nevOptions";
import RegisterForm from "../components/users/RegisterForm"


const RegisterPage = (props) => {
 

  return (
  <Card>
    <RegisterForm/>
  </Card>);
};

export default RegisterPage;
