import React from "react";

function Nav(props) {
  return (
    <nav class="navbar">
      <ul>
        <li class="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li class="">
          {props.correct}
        </li>
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li
      ></ul>
    </nav>
  );
}

export default Nav;
