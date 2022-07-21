import "./App.css";

import React, { Suspense} from "react";


import { Route, Redirect } from "react-router-dom";

import Layout from "./components/layout/layout";
import Myinvestments from "./pages/MyInvestments";
import MarketPage from "./pages/MarketPage";
import Investment from "./pages/Investment"
import Manager from "./pages/Manager";

const WelcomePage = React.lazy(() => import("./pages/WelcomePage.js"));

function App() {

  return (
    <Layout>
      <Suspense fallback={<div className="centered">loading</div>}>
        <Route path="/" exact>
          <Redirect to="/welcomePage" />
        </Route>
        <Route path="/welcomePage" exact>
           <WelcomePage/> 
        </Route>

        <Route path="/Myinvestments" exact>
           <Myinvestments/> 
        </Route>

        <Route path="/Myinvestments/:Id" exact>
            <Investment />
          </Route>

          <Route path="/Myinvestments/:Id/Manger" exact>
            <Manager />
          </Route>

        <Route path="/currentmarket" exact>
           <MarketPage/> 
        </Route>

        

      </Suspense>
    </Layout>
  );
}

export default App;
