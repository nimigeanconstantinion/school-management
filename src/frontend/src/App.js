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

import UserProvider from "./Context";
import StudentBoard from "./components/StudentBoard";

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
        <Route exact path="/student"><StudentBoard /></Route>
          
      </Switch>
    </UserProvider>
    </Router>)
}