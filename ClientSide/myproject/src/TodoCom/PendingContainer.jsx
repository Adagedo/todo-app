import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PendingContainer({ pendingtodo }) {
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
      <div className="pend">
        {pendingtodo.map((todo) => (
          <div className="pendings">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>
              <i>{todo.date}</i>
            </p>
            <p>{todo.status}...</p>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PendingContainer;
