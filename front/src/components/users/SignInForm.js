import React, { useEffect } from "react";
import classes from './SignInForm.module.css';

const SignInForm = (props) => {
  return (
    <form >
      <div className={classes.control}>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" />
      </div>

      <div className={classes.control}>
        <label htmlFor="author">password</label>
        <input type="text" id="author" />
      </div>


      {/* <div className={classes.control}>
        <label htmlFor="text">Text</label>
        <textarea id="text" rows="5" ></textarea>
      </div> */}
      <div className={classes.actions}>
        <button className="btn">
         sign in
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
