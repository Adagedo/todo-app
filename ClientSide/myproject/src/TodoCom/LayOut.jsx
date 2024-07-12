import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { FaPhoenixFramework } from "react-icons/fa";

function LayOut() {
  return (
    <div>
      <div className="container">
        <div className="prenavwrapper">
          <div className="prenav">
            <Stack direction={"row"} spacing={17}>
              <h1>
                <FaPhoenixFramework size={50} /> Empire
              </h1>
              <div>
                <label htmlFor="search" className="nav-input">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="serach todo"
                  className="nav-input"
                />
              </div>
              <div className="div">
                <h3>Stay Updated with your daily todo</h3>
              </div>
            </Stack>
          </div>
        </div>
        <Stack direction="row" spacing={17}>
          <div className="Header">
            <header>
              <Header />
            </header>
          </div>
          <div className="main">
            <Outlet />
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default LayOut;
