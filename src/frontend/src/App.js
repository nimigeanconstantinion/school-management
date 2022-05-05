import React from "react";

import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom"
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import CourseDetails from "./components/CourseDetails";
import SignUp from "./components/SignUp";
import MyEnrolments from "./components/MyEnrolments";
import UserProvider from "./Context";
import StudentBoard from "./components/StudentBoard";
import MenuProvider from "./ContextMenu"
import StudentPrivateRoute from "./components/StudentPrivateRoute";

export default () => {
  

  return (
    <Router>
      <UserProvider>
        
    <Header />   
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/signin"><SignIn /></Route>
        <Route exact path="/coursedetails/:courseId/:userId"><CourseDetails/></Route>
        <Route exact path="/signup"><SignUp /></Route>
        <MenuProvider>
            <Route exact path="/student"><StudentBoard /></Route>
        </MenuProvider>
        <Route exact path="/wstudent"><p>Tefvsjjkjkdjk</p></Route>

      </Switch>
    </UserProvider>
    </Router>)
}