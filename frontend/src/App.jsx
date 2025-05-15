import { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/Login_page';
import './App.scss';
import './styles/variables.scss';

// Crearea contextului
const MyContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [isToogleSidebar, setIsToogleSidebar] = useState(true);

  const values = {
    isLogin,
    setIsLogin,
    isToogleSidebar,
    setIsToogleSidebar,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader
  };
  
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHideSidebarAndHeader !== true &&
          <Header/>
        }
        <div className="main d-flex" aria-label='main'>
          {
            isHideSidebarAndHeader !== true && 
            <div className={`sidebarWrapper ${isToogleSidebar === true ? 'toggle' : ''}`} aria-label='sidebarWrapper'>
              <Sidebar/>
            </div>
          }
          
          <div className={`content ${isHideSidebarAndHeader == true && 'full' } ${isToogleSidebar == true ? 'togle' : ''}`} aria-label='content'>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/Dashboard" exact={true} element={<Dashboard />} />
              <Route path="/LoginPage" exact={true} element={<LoginPage />} />
            </Routes> 
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

// Exportăm și contextul pentru a putea fi folosit în alte componente
export { MyContext };
export default App;