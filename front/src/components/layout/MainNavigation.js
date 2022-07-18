

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Investment Fund</div>
      <nav className={classes.nav}>{props.mainNevBar}</nav>
    </header>
  );
};
export default MainNavigation;
