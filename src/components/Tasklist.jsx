import { useState } from "react";

function Tasklist() {
  
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("Active");
  const [editIndex, setEditIndex] = useState(null);

  const day = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const handleAddOrUpdateTask = () => {
    if (!taskName.trim()) return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = {
        ...updatedTasks[editIndex],
        name: taskName,
        status: taskStatus,
      };
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          name: taskName,
          status: taskStatus,
        },
      ]);
    }

    setTaskName("");
    setTaskStatus("Active");
  };

  const handleDelete = (index) => {
    const updated = tasks
      .filter((_, i) => i !== index)
      .map((task, i) => ({
        ...task,
        id: i + 1,
      }));
    setTasks(updated);
  };

  const handleEdit = (index) => {
    setTaskName(tasks[index].name);
    setTaskStatus(tasks[index].status);
    setEditIndex(index);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
      <h1 className="mb-5 text-sky-800 text-center text-3xl font-bold tracking-wider">To Do List</h1>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Today is: {day}</h1>
        <div className="space-x-2">
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Enter Task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <select
            className="border p-2 rounded"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
          >
            <option>Active</option>
            <option>Pending</option>
            <option>Finished</option>
          </select>
          <button
            onClick={handleAddOrUpdateTask}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      </div>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">No.</th>
            <th className="p-2 border">Task</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Edit</th>
            <th className="p-2 border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <tr key={i} className="text-sm text-gray-800">
              <td className="border p-2">{task.id}</td>
              <td className="border p-2">{task.name}</td>
              <td className="border p-2">{task.status}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(i)}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </button>
              </td>
              <td className="border p-2">
                <button
                  onClick={() => handleDelete(i)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {tasks.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No tasks added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Tasklist;
