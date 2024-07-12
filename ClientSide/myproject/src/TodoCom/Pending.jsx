import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import PendingContainer from "./PendingContainer";
import { CircularProgress } from "@mui/material";

function Pending() {
  const [PendingTodo, setPendingTodo] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      async function FetchPendingTodo() {
        const url = "http://localhost:3000/getPending";
        try {
          const response = await axios.get(url);
          const responseData = response.data;
          setPendingTodo(responseData);
          setisLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
      FetchPendingTodo();
    }, 3000);
  }, []);

  return (
    <div>
      <div className="serchtodos">
        <h1>CheckOut your pending Tasks.</h1>
      </div>
      <div className="pendingtodos">
        {isLoading ? <CircularProgress size={50} /> : null}
        {PendingTodo && <PendingContainer pendingtodo={PendingTodo} />}
      </div>
    </div>
  );
}

export default Pending;
