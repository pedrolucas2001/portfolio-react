import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';

function App() {

  return (
    <div>
    <Router>
      <Layout>
        <Home></Home>
      </Layout>
    </Router>
    </div>

  )
}

export default App
