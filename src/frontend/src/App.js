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
export default () => {
  

  return (
    <Router>
    <Header />
        
      <Switch>

        <Route exact path="/"><Home /></Route>
        <Route exact path="/signin"><SignIn /></Route>
        <Route exact path="/coursedetails/:courseId/:userId"><CourseDetails/></Route>
        <Route exact path="/signup"><SignUp/></Route>
      </Switch>
     
    </Router>)
}