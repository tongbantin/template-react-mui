import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
//Component
import { Login } from "./module/login";
import { ProtectedRoutes } from "./template/ProtectedRoutes";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Route exact path="/Login" component={Login} />
        {/* <RouteLayout exact path="/" component={Portal} /> */}
        <Route exact path={ProtectedRoutes.route} component={ProtectedRoutes} />
      </Router>
    </>
  );
}
export  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
export default App;
