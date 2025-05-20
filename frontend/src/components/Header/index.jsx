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
import PERSON1 from '../../assets/images/Person1.webp';
import PERSON2 from '../../assets/images/Person2.webp';
import PERSON3 from '../../assets/images/Person3.webp';
import PERSON4 from '../../assets/images/Person4.webp';
import PERSON5 from '../../assets/images/Person5.webp';

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

    // Notification data - am adăugat mai multe notificări pentru a demonstra scroll-ul
    const notifications = [
        {
            id: 1,
            avatar: PERSON1,
            name: "Norman",
            action: "added to his favorite list",
            target: "Leather belt steve madden",
            time: "few seconds ago!",
            active: true
        },
        {
            id: 2,
            avatar:PERSON2,
            name: "Jessy",
            action: "leave her comment to",
            target: "Dressni Breathable female Dress",
            time: "25 minutes ago!",
            active: true
        },
        {
            id: 3,
            avatar: PERSON3,
            name: "Tahmina",
            action: "announce to 50% discount",
            target: "New Exclusive long kurti",
            time: "12 hours ago!",
            active: true
        },
        {
            id: 4,
            avatar: PERSON4,
            name: "Carol",
            action: "write to his latest blog",
            target: "Best fashion outfit this winter",
            time: "4 days ago!",
            active: true
        },
        {
            id: 5,
            avatar: PERSON2,
            name: "Rebeka",
            action: "give a review to",
            target: "Exclusive Designed Multicolor long Kaptan",
            time: "1 week ago!",
            active: false
        },
        {
            id: 6,
            avatar: PERSON5,
            name: "Alexandru",
            action: "updated his profile with",
            target: "New collection items for summer",
            time: "2 weeks ago!",
            active: false
        },
        {
            id: 7,
            avatar: PERSON3,
            name: "Maria",
            action: "shared your post about",
            target: "Fashion trends for 2025",
            time: "3 weeks ago!",
            active: false
        }
    ];
    
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
                    <div className="header__menu-block" aria-label='header-menu-block'>
                        <Button className="header__menu-button" aria-label='header-menu-button'>
                            <MdMenuOpen />
                        </Button>
                        <SearchBox />
                    </div>
                    
                    {/* Right Section - Actions and User Profile */}
                    <div className="header__right col-sm-7 d-flex align-items-center justify-content-end" aria-label='right-part-header'>
                        {/* Action Buttons */}
                        <div className="header__actions d-flex" aria-label='header-actions'>
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
                                className='notifications dropdown_list'
                                onClose={handleCloseNotificationDrop}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            maxWidth: '350px',
                                            maxHeight: '85vh', // Adăugat pentru a limita înălțimea totală
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
                                            '& .MuiMenuItem-root': {
                                                padding: '0',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0,0,0,0.04)',
                                                }
                                            }
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <div className="notification-header" style={{ padding: '10px 15px', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
                                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Notifications (12)</h4>
                                </div>
                                
                                <Divider style={{ margin: '0 0 8px 0' }} />
                                
                                <div style={{ 
                                    maxHeight: '200px', 
                                    overflowY: 'auto',
                                    overflowX: 'hidden',
                                    scrollbarWidth: 'thin', // Pentru Firefox
                                }}>
                                    {notifications.map(notification => (
                                        <MenuItem key={notification.id} onClick={handleCloseNotificationDrop}>
                                            <div style={{ 
                                                display: 'flex', 
                                                padding: '10px 15px', 
                                                width: '100%', 
                                                alignItems: 'flex-start',
                                                borderLeft: notification.active ? '3px solid #3498db' : 'none'
                                            }}>
                                                <div style={{ 
                                                    width: '40px', 
                                                    height: '40px', 
                                                    borderRadius: '50%', 
                                                    overflow: 'hidden',
                                                    marginRight: '10px',
                                                    flexShrink: 0
                                                }}>
                                                    <img 
                                                        src={notification.avatar} 
                                                        alt={`${notification.name} avatar`}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div style={{ flex: 1, overflow: 'hidden' }}>
                                                    <h4 style={{ 
                                                        margin: '0 0 5px 0', 
                                                        fontSize: '14px', 
                                                        fontWeight: 'normal',
                                                        whiteSpace: 'normal',
                                                        wordBreak: 'break-word',
                                                        lineHeight: '1.4'
                                                    }}>
                                                        <b>{notification.name}</b> {notification.action} <b>{notification.target}</b>
                                                    </h4>
                                                    <p style={{ 
                                                        margin: 0, 
                                                        fontSize: '12px', 
                                                        color: '#777',
                                                        whiteSpace: 'nowrap' 
                                                    }}>
                                                        {notification.time}
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    ))}
                                </div>
                                
                                <div style={{ 
                                    padding: '10px 15px', 
                                    position: 'sticky', 
                                    bottom: 0, 
                                    backgroundColor: 'white',
                                    borderTop: '1px solid rgba(0,0,0,0.12)' 
                                }}>
                                    <Button 
                                        fullWidth
                                        variant="contained" 
                                        color="primary"
                                        component={Link}
                                        to="/notifications"
                                        style={{ textTransform: 'none' }}
                                    >
                                        View All Notifications
                                    </Button>
                                </div>
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