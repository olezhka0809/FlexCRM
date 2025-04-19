import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { IoShieldHalfSharp } from "react-icons/io5";

// Material UI Icons
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

// React Icons
import { MdMenuOpen, MdLightMode, MdEmail } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { FaCartShopping } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";

// Import images
import LOGO_SAMPLE from '../../assets/images/logo_sample.webp';
import PERSON_SAMPLE from '../../assets/images/avatar.webp';

// Import components
import SearchBox from "../SearchBox";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
    const openMyAcc = Boolean(anchorEl);
    const openMyNotification = Boolean(notificationAnchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleOpenNotificationDrop = (event) => {
        setNotificationAnchorEl(event.currentTarget);
    };
    
    const handleCloseNotificationDrop = () => {
        setNotificationAnchorEl(null);
    };
    
    return (
        <header className="header" aria-label="header-section">
            <div className="header__container">
                <div className="header__wrapper">
                    {/* Logo Section */}
                    <div className="header__logo-block">
                        <Link to="/" className="header__logo-link">
                            <img 
                                className="header__logo-img" 
                                src={LOGO_SAMPLE} 
                                alt="FlexCRM Logo" 
                            />
                            <span className="header__logo-text">FlexCrm</span>
                        </Link>
                    </div>
                    
                    {/* Menu and Search Section */}
                    <div className="header__menu-block">
                        <Button className="header__menu-button">
                            <MdMenuOpen />
                        </Button>
                        <SearchBox />
                    </div>
                    
                    {/* Right Section - Actions and User Profile */}
                    <div className="header__right col-sm-7 d-flex align-items-center justify-content-end">
                        {/* Action Buttons */}
                        <div className="header__actions d-flex">
                            <Button className="header__menu-button">
                                <MdLightMode />
                            </Button>
                            <Button className="header__menu-button">
                                <SlGlobe />
                            </Button>
                            <Button className="header__menu-button">
                                <FaCartShopping />
                            </Button>
                            <Button className="header__menu-button">
                                <MdEmail />
                            </Button>
                            <Button 
                                className="header__menu-button"
                                onClick={handleOpenNotificationDrop}
                                aria-controls={openMyNotification ? 'notification-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openMyNotification ? 'true' : undefined}
                            >
                                <FaBell />
                            </Button>

                            {/* Notification Menu */}
                            <Menu
                                id="notification-menu"
                                anchorEl={notificationAnchorEl}
                                open={openMyNotification}
                                onClose={handleCloseNotificationDrop}
                                onClick={handleCloseNotificationDrop}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <Divider />
                                <MenuItem onClick={handleCloseNotificationDrop}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    My Notifications
                                </MenuItem>
                                <MenuItem onClick={handleCloseNotificationDrop}>
                                    <ListItemIcon>
                                        <IoShieldHalfSharp />
                                    </ListItemIcon>
                                    Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleCloseNotificationDrop}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                        
                        {/* User Profile */}
                        <div className="header__right__myacc-wrapper">
                            <Button className="header__right__myacc d-flex align-items-center"
                            onClick={handleClick}
                            aria-controls={openMyAcc ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMyAcc ? 'true' : undefined}>
                                <div className="header__right__myacc-content">
                                    <span className="header__right__myacc-image">
                                        <img src={PERSON_SAMPLE} alt="User avatar" />
                                    </span>
                                </div>
                                <div className="header__right__myacc-info">
                                    <h4>Michael Thompson</h4>
                                    <p>michael.thompson@gmail.com</p>
                                </div>
                            </Button>

                            {/* Account Menu */}
                            <Menu
                                id="account-menu"
                                anchorEl={anchorEl}
                                open={openMyAcc}
                                onClose={handleClose}
                                onClick={handleClose}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    My Account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <IoShieldHalfSharp />
                                    </ListItemIcon>
                                    Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;