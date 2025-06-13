import { useNavigate } from 'react-router-dom';
function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <button className="bg-green-500 text-white px-4 py-2 rounded mr-4" onClick={() => navigate('/create-exam')}>Create Exam</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate('/attempt-exam')}>Attempt Exam</button>
    </div>
  );
}
export default Dashboard;