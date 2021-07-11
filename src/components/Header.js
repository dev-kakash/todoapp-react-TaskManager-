import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ onClick, show }) => {
  const location = useLocation();
  return (
    <header className="header row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light col-12 px-5">
        <a class="navbar-brand" href="#">
          Task Manager
        </a>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            {location.pathname === "/" && (
              <Button
                color={show ? "red" : "green"}
                text={show ? "Close" : "Add"}
                onClick={onClick}
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
