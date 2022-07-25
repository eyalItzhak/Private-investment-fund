import "./App.css";

import React, { Suspense} from "react";


import { Route, Redirect } from "react-router-dom";

import Layout from "./components/layout/layout";
import Myinvestments from "./pages/MyInvestments";
import MarketPage from "./pages/MarketPage";
import Investment from "./pages/Investment"
import Manager from "./pages/Manager";
import Stakeholder  from "./pages/Stakeholder";
import InvetorPage from "./pages/investorPage"
import AllPortfolios from "./pages/AllPortfolios"
import Portfolio from "./pages/Portfolio"
import MakeInvestmentForm from "./pages/MakeInvestmentForm"

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

          <Route path="/Myinvestments/:Id/Stakeholder" exact>
            <Stakeholder />
          </Route>

          <Route path="/Myinvestments/:Id/Investor" exact>
            <InvetorPage />
          </Route>

          <Route path="/portfolios" exact>
            <AllPortfolios/>
          </Route>

          <Route path="/portfolios/:id" exact>
            <Portfolio/>
          </Route>
          
          <Route path="/portfolios/:id/InvestmentForm" exact>
            <MakeInvestmentForm/>
          </Route>

        <Route path="/currentmarket" exact>
           <MarketPage/> 
        </Route>
        

        

      </Suspense>
    </Layout>
  );
}

export default App;
