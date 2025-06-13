import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import CreateExam from './components/CreateExam'
import AttemptExam from './components/AttemptExam'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Online Exam Portal</h1>
          </header>
        </div>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/create-exam" element={<PrivateRoute><CreateExam /></PrivateRoute>} />
            <Route path="/attempt-exam" element={<PrivateRoute><AttemptExam /></PrivateRoute>} />
          </Routes>
        </div>
        <div className="App-footer">
          <p>&copy; 2023 Online Exam Portal</p>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App
