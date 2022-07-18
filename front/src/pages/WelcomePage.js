
import React, { useEffect } from "react";
import Card from "../components/UI/Card";
import { signIn } from "./utils/nevOptions";

const WelcomePage = (props) => {
  useEffect(() => {
    props.setBar(
      signIn()
    );
  }, [props]);

  return (<Card></Card>);
};

export default WelcomePage;
