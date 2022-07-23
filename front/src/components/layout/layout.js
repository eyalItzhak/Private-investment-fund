import { Fragment } from "react";
import Classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
//import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <div>
        <MainNavigation />
        <main className={Classes.main}>{props.children}</main>
        {/*<Footer/>*/}
      </div>
    </Fragment>
  );
};

export default Layout;
