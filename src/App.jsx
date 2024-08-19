import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={
            <Layout>
              <Home></Home>
            </Layout>
          }>
          </Route>

          <Route path='/about' element = {  
             <Layout>
              <About></About>
            </Layout>}>
          </Route>

        </Routes>
      </Router>
    </div>

  )
}

export default App
