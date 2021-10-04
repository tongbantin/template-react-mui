import React from "react";
import {
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import LayoutMenu from "./Layout-Menu";

export const RouteLayout =({ component: Component, ...rest }) => (
  <>
    <Route
      {...rest}
      render={(props) => (
        <>
          <Layout >
            <Component {...props} />
          </Layout>
        </>
      )}
    />
  </>
);
export const RouteLayout2 = ({ component: Component,ScreenName,helper ,...rest }) => (
  <>
    <Route
    
      {...rest}
      
      render={(props) => (
        <>
          <LayoutMenu ScreenName={ScreenName} helper={helper}>
            <Component {...props}  />
          </LayoutMenu>
        </>
      )}
    />
  </>
);
export default RouteLayout