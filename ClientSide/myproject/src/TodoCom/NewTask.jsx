import { Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState("");
  const Navigate = useNavigate();
  async function AddTodoList(e) {
    e.preventDefault();
    const url = "http://localhost:3000/post";
    try {
      const response = await axios.post(url, {
        title,
        description,
        date,
        status,
      });
      console.log(response.data);
      Navigate("/todo");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="newtaskcont">
      <div className="createnewtask">
        <h1>NewTask</h1>
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
          </div>
          <div className="savetodo">
            <button className="savebtn" type="submit" onClick={AddTodoList}>
              Save Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTask;
