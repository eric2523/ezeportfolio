import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Splash } from "./splash";

export const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Redirect to="/" />
      </Switch>
      <footer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/eric2523"
        >
          <span>
            <i class="fab fa-github"></i>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/eric-xian-2998061a6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <i class="fab fa-linkedin"></i>
          </span>
        </a>
      </footer>
    </div>
  );
};
