function TaskList({ tasks, onDelete }) {
    return (
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;
  