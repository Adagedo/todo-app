import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import CompletedContainer from "./CompletedContainer";

function CompletedtTask() {
  const [CompletedTodo, setCompletedTodo] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      async function FetchCompletedTodo() {
        const url = "http://localhost:3000/getcompleted";
        try {
          const response = await axios.get(url);
          const responseData = response.data;
          setCompletedTodo(responseData);
          setisLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
      FetchCompletedTodo();
    }, 3000);
  }, []);
  return (
    <div>
      <h1> CheckOut Your completed task</h1>
      <div className="completedtodos">
        {isLoading ? <CircularProgress size={50} /> : null}
        {CompletedTodo && <CompletedContainer completedTodo={CompletedTodo} />}
      </div>
    </div>
  );
}

export default CompletedtTask;
