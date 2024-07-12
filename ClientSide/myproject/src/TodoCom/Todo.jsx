import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

function Todo() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [Todos, SetTodo] = useState([]);
  useEffect(() => {
    async function get() {
      const url = "http://localhost:3000/post";
      try {
        const response = await axios.get(url);
        SetTodo(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, []);
  async function HandeleDelete(id) {
    try {
      const response = await axios.delete(" http://localhost:3000/post/" + id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="todocontainer">
        <h1>Your Daily Weekly or Monthly Todo</h1>
        {Todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>
              <i>{todo.date}</i>
            </p>
            <p>
              <i>{todo.status}</i>
            </p>
            <div className="actionbtn">
              <button
                className="deletebtn"
                onClick={() => {
                  HandeleDelete(todo.id);
                }}
              >
                Delete
              </button>
              <Link className="updatelink" to={`/update/${todo.id}`}>
                Update
              </Link>
              <div className="pending">
                <label htmlFor="">Completed</label>
                <input
                  type="checkbox"
                  name="complete"
                  id="complete"
                  onClick={() => {
                    if (checked) {
                      setChecked(true);
                    } else {
                      console.log("not checked");
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
