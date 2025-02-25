import { useState } from "react";
import Formulario from "./Components/Formulario";
import Lista from "./Components/Lista";
import Filtro from "./Components/Filtro";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.category === filter);

  return (
    <div className="container">
      <h1>Administrador de Tareas</h1>
      <Formulario addTask={addTask} />
      <Filtro setFilter={setFilter} />
      <Lista tasks={filteredTasks} removeTask={removeTask} />
    </div>
  );
}
