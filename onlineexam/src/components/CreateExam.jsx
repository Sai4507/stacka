import { useState, useContext } from 'react';
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';
function CreateExam() {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const { token } = useContext(AuthContext);
  const handleCreate = async () => {
    await axios.post('/exams', { title, startTime: start, endTime: end }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Exam Created');
  };
  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl mb-4 font-semibold">Create Exam</h2>
      <input className="border p-2 rounded w-full mb-2" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input className="border p-2 rounded w-full mb-2" type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} />
      <input className="border p-2 rounded w-full mb-2" type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} />
      <button onClick={handleCreate} className="bg-green-500 text-white px-4 py-2 rounded">Create</button>
    </div>
  );
}
export default CreateExam;
