import React from "react";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  FaDashcube,
  FaHeading,
  FaAppStore,
  FaUpload,
  FaTasks,
  FaHome,
} from "react-icons/fa";
import { AiOutlineLoading, AiOutlineSafety } from "react-icons/ai";
function Header() {
  const { id } = useParams();
  return (
    <div>
      <div className="pagewrapper">
        <div className="page">
          <Stack direction="column" spacing={4}>
            <NavLink to={"/"}>
              <Stack direction="row" spacing={0.5}>
                <FaHome />
                <span>Home</span>
              </Stack>
            </NavLink>
            <NavLink to={"/todo"}>
              {" "}
              <Stack direction="row" spacing={0.5}>
                <FaTasks />
                <span>Task</span>
              </Stack>
            </NavLink>
            <NavLink to={"/newtodo"}>
              <Stack direction="row" spacing={0.5}>
                <FaAppStore />
                <span> Create</span>
              </Stack>
            </NavLink>
            <NavLink to={"/update/:id"}>
              <Stack direction="row" spacing={0.5}>
                <FaHeading />
                <span>Update</span>
              </Stack>
            </NavLink>

            <NavLink to={"/pendingtodo"}>
              <Stack direction="row" spacing={0.5}>
                <AiOutlineLoading />
                <span> Pending Task</span>
              </Stack>
            </NavLink>
            <NavLink to={"/completed"}>
              {" "}
              <Stack direction="row" spacing={0.5}>
                <AiOutlineSafety />
                <span> Completed Task</span>
              </Stack>
            </NavLink>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Header;
