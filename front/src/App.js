import "./App.css";

import React, { Suspense, useState } from "react";
//import { useState, useEffect, useCallback } from 'react';

import { Route, Redirect } from "react-router-dom";

import Layout from "./components/layout/layout";


const WelcomePage = React.lazy(() => import("./pages/WelcomePage.js"));

function App() {
  const [mainNevBar, setMainNevBar] = useState(<></>);

  return (
    <Layout mainNevBar={mainNevBar}>
      <Suspense fallback={<div className="centered">loading</div>}>
        <Route path="/" exact>
          <Redirect to="/welcomePage" />
        </Route>
        <Route path="/welcomePage" exact>
          <WelcomePage setBar={setMainNevBar} />
        </Route>
      </Suspense>
    </Layout>
  );
}

export default App;
