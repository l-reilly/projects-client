import React from "react";
import { Switch } from "react-router-dom";
import { AppRoute, GuestRoute } from ".";
import { Auth } from "../pages/Auth";
import { Main } from "../pages/Main";
import { NewProject } from "../pages/NewProject";
import { Projects } from "../pages/Projects";
import { Project } from "../pages/Project";

function AppRouter() {
  return (
    <Switch>
      <GuestRoute path="/login" exact>
        <Auth isLogin={true} />
      </GuestRoute>
      <GuestRoute path="/signup" exact>
        <Auth />
      </GuestRoute>
      <AppRoute exact path="/projects">
        <Projects />
      </AppRoute>
      <AppRoute exact path="/projects/:projectId">
        <Project />
      </AppRoute>
      <AppRoute exact path="/new-project">
        <NewProject />
      </AppRoute>
      <AppRoute exact path="/">
        <Main />
      </AppRoute>
    </Switch>
  );
}

export default AppRouter;
