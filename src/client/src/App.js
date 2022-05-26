import React from "react";
import Home from "./components/Home/index";
import {Globalstyle} from "./Globalstyle";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from "react-router-dom";
import SignIn from "./components/SingnIn/index"
import Header from "./components/Header";
import UserProvider from "./Context";
import StudentBoard from "./components/StudentBoard/index";
import SignUp from "./components/SignUp/index";
import HTML2PDF from "./components/HTML2PDF/index";
import CardBook from "./components/CardBook/index";
function App() {

  return (
      <>
        <Router>
            <UserProvider>
            <Header/>

            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/signin"} element={<SignIn/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/studentBoard"} element={<StudentBoard stage={0}/>}/>
                {/*<Route path={"/"} element={<CardBook index={12} title={"M,M,"} addClick={""} delbookClick={""}/>}/>*/}
            </Routes>
            </UserProvider>
            <Globalstyle/>

        </Router>

      </>
  );
}

export default App;
