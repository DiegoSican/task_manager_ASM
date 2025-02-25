export default function TaskItem({ task, removeTask }) {
  return (
    <div className="task-item">
      <div className="task-content">
        <p>{task.text}</p>
        <span className="category">Categoría: {task.category}</span>
      </div>
      <button className="delete-btn" onClick={() => removeTask(task.id)}>
        🗑
      </button>
    </div>
  );
}
