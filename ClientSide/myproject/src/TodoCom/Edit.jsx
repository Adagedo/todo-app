import { Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const Navigate = useNavigate();
  async function UpdateTodoList(e) {
    e.preventDefault();
    const url = "http://localhost:3000/update/" + id;
    try {
      const response = await axios.put(url, { title, description, date });
      console.log(response.data);
      Navigate("/todo");
    } catch (error) {
      console.log(error);
    }
  }
  const location = useLocation();
  const TodoId = location.pathname.split("/")[2];
  return (
    <div className="newtaskcont">
      <div className="createnewtask">
        <h1>Upadate Task</h1>
        <form>
          <div className="title">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="newtaskinput"
            />
          </div>
          <div className="description">
            <Stack direction={"row"} spacing={0}>
              <label htmlFor="Description">Description</label>
              <textarea
                className="newtaskinput"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Stack>
          </div>

          <div className="date">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              className="newtaskinput"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="status">
            <label htmlFor="status">status</label>
            <select
              name="status"
              id="status"
              className="status-input"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="Pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            <div className="savetodo">
              <button
                className="savebtn"
                type="submit"
                onClick={UpdateTodoList}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
