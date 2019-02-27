import React from "react";
import { HashRouter as Router } from "react-router-dom";
import PostList from "./PostList";

const App = () => {
  return (
    <Router>
      <div className="ui container">
        <PostList />
      </div>
    </Router>
  );
};

export default App;
