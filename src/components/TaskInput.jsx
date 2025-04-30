import { useState } from 'react';

function TaskInput({ onAdd }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    onAdd(task);
    setTask('');
  };

  return (
    <div className="task-input">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;
