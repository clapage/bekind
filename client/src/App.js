import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Routes>
    </Router>
  );
}


export default App;
