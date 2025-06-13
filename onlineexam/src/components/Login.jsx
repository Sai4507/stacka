import { useState, useContext } from 'react';
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8080/api','/auth/login', { username, password });
    login(res.data.token);
    navigate('/dashboard');
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input className="border p-2 rounded w-full mb-2" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input className="border p-2 rounded w-full mb-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
}
export default Login;