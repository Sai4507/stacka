import { useState, useEffect, useContext } from 'react';
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';
function AttemptExam() {
  const [exam, setExam] = useState(null);
  const [answers, setAnswers] = useState({});
  const { token } = useContext(AuthContext);
  useEffect(() => {
    const fetchExam = async () => {
      const res = await axios.get('/exams/1', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExam(res.data);
    };
    fetchExam();
  }, []);
  const handleSubmit = async () => {
    await axios.post(`/exams/1/submit`, { answers }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert('Submitted');
  };
  if (!exam) return <p>Loading...</p>;
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">{exam.title}</h2>
      {exam.questions.map((q) => (
        <div key={q.id} className="mb-4">
          <p className="font-medium mb-1">{q.questionText}</p>
          {q.options.map((opt) => (
            <label key={opt} className="block mb-1">
              <input type="radio" name={q.id} onChange={() => setAnswers({ ...answers, [q.id]: opt })} />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </div>
  );
}
export default AttemptExam;
