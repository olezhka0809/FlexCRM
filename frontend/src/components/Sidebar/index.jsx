import Button from '@mui/material/Button';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import MessageIcon from '@mui/icons-material/Message';
import { FaBell } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoMdLogOut } from "react-icons/io";




const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate(); // Folosim hook-ul de navigare din React Router
    
    const isOpenSubMenu = (index) => {
        if (activeTab === index) {
            setActiveTab(0);
        } else {
            setActiveTab(index);
        }
    }

    // Funcția de logout
    const handleLogout = () => {
        // Aici putem adăuga operațiuni de logout cum ar fi:
        // 1. Ștergerea token-ului de autentificare
        localStorage.removeItem('authToken');
        // 2. Resetarea stării globale dacă este cazul
        // dispatch({ type: 'LOGOUT' });
        
        // 3. Redirecționare către pagina de login
        navigate('../../pages/LoginPage/index.jsx');
        
        // Alternativ, dacă nu folosești React Router, poți folosi:
        // window.location.href = '/login';
    }

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className='w-100'>
                                <span className="icon">
                                    <TbLayoutDashboardFilled /> 
                                </span>
                                Dashboard 
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button 
                            className={`w-100 ${activeTab === 1 ? 'active' : ''}`} 
                            onClick={() => isOpenSubMenu(1)}
                        >
                            <span className="icon">
                                <FaProductHunt /> 
                            </span>
                            Products 
                            <span className="arrow">
                                {activeTab === 1 ? <FaAngleDown /> : <FaAngleRight />}
                            </span>
                        </Button>
                        
                        {activeTab === 1 && (
                            <div className="submenuWrapper">
                                <div className="submenu">
                                    <ul>
                                        <li><Link to="#">Product List</Link></li>
                                        <li><Link to="#">Product View</Link></li>
                                        <li><Link to="#">Product Upload</Link></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link to="/">
                            <Button className='w-100'>
                                <span className="icon">
                                    <FaCartArrowDown /> 
                                </span>
                                Orders
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                    {/* Rest of the menu items stay the same */}
                    <li>
                        <Link to="/">
                            <Button className='w-100'>
                                <span className="icon">
                                    <MessageIcon /> 
                                </span>
                                Messages
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className='w-100'>
                                <span className="icon">
                                    <FaBell /> 
                                </span>
                                Notifications
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className='w-100'>
                                <span className="icon">
                                    <MdSettings /> 
                                </span>
                                Settings
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className='w-100'>
                                <span className="icon">
                                    <IoMdLock /> 
                                </span>
                                Authentication
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className='w-100'>
                                <span className="icon">
                                    <FaCartArrowDown /> 
                                </span>
                                Sign Up
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                </ul>
                <br />

                <div className="logoutWrapper">
                    <div className="logoutBox">
                        <Button variant="contained" onClick={handleLogout}>
                            <IoMdLogOut/> Logout
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;