import React from "react";
import Home from "./components/Home/index";
import {Globalstyle} from "./Globalstyle";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from "react-router-dom";
import SignIn from "./components/SingnIn/index"
import Header from "./components/Header";
import UserProvider from "./Context";
function App() {

  return (
      <>
        <Router>
            <UserProvider>
            <Header/>

            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/signin"} element={<SignIn/>}/>
            </Routes>
            </UserProvider>
            <Globalstyle/>

        </Router>

      </>
  );
}

export default App;
