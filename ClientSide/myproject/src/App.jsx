import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./TodoCom/DashBoard";
import Todo from "./TodoCom/Todo";
import LayOut from "./TodoCom/LayOut";
import NewTask from "./TodoCom/NewTask";
import Pending from "./TodoCom/Pending";
import Edit from "./TodoCom/Edit";
import CompletedtTask from "./TodoCom/CompletedTask";
import Help from "./TodoCom/Help";
import { useParams } from "react-router-dom";

function App() {
  const { id } = useParams();
  return (
    <div>
      <div className="container">
        <Routes>
          <Route element={<LayOut />}>
            <Route path="/" index element={<DashBoard />} />
            <Route path="/todo" index element={<Todo />} />
            <Route path="/newtodo" index element={<NewTask />} />
            <Route path="/pendingtodo" index element={<Pending />} />
            <Route path="/update/:id" index element={<Edit />} />
            <Route path="/completed" index element={<CompletedtTask />} />
            <Route path="/help" index element={<Help />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
