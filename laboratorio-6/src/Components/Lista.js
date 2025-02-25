import TaskItem from "./Tareas";

export default function TaskList({ tasks, removeTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} removeTask={removeTask} />
      ))}
    </div>
  );
}
