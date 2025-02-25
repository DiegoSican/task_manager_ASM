import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState({ text: "", category: "Proxima" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.text.trim()) return;
    addTask({ ...task, id: Date.now() });
    setTask({ text: "", category: "Proxima" });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Nueva Tarea"
        value={task.text}
        onChange={(e) => setTask({ ...task, text: e.target.value })}
      />
      <select
        value={task.category}
        onChange={(e) => setTask({ ...task, category: e.target.value })}
      >
        <option value="Proxima">Próxima</option>
        <option value="Cercana">Cercana</option>
        <option value="Lejana">Lejana</option>
      </select>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}
