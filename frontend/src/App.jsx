import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.scss';
import './styles/variables.scss';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="main d-flex " aria-label='main'>
        <div className="sidebarWrapper" aria-label='sidebarWrapper'>
          <Sidebar/>
        </div>
        
        <div className="content" aria-label='content'>
          
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/Dashboard" exact={true} element={<Dashboard />} />
          </Routes> 
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
