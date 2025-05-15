import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Button, 
  TextField, 
  Container, 
  Paper, 
  Typography, 
  Box, 
  InputAdornment, 
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

import { MyContext } from '../../App'; // Context global
import LOGO from '../../assets/images/logo_full.webp';
import PATERN from '../../assets/images/background.webp';



const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Member');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin@example.com' && password === 'password' && userType === 'Admin') {
      onLogin();               
      navigate('/dashboard');  
    } else {
      setError('Invalid email, password or user type');
    }
  };

  const handleGoogleLogin = () => {
    // To be implemented
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    // To be implemented
    console.log('Facebook login clicked');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <img src={PATERN} alt="login__background-Patern" className="login__patern" />
      <section className="loginPage">
        <div className="login">
          {/* Header Logo și Titlu */}

          <Container component="main" maxWidth="xs" className="login-container">
            <Paper elevation={3} className="login-paper">
              {/* Afișare eroare */}
              {error && (
                <Typography color="error" className="login-error">
                  {error}
                </Typography>
              )}

              <Box component="form" onSubmit={handleSubmit} className="login-form">
                <div className="login__head">
                  <img src={LOGO} alt="Logo" className="login__head-logo" />
                  <h1 className="login__head-title">Login to FlexCrm</h1>
                </div>
                {/* Email Field with Icon */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Enter your Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  className="login-field"
                />
                
                {/* Password Field with Icons */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  className="login-field"
                />
                
                {/* User Type Select */}
                <FormControl fullWidth margin="normal" className="login-field">
                  <InputLabel id="user-type-select-label">Select User Type</InputLabel>
                  <Select
                    labelId="user-type-select-label"
                    id="user-type-select"
                    value={userType}
                    label="Select User Type"
                    onChange={(e) => setUserType(e.target.value)}
                  >
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Member">Member</MenuItem>
                  </Select>
                </FormControl>
                
                {/* Sign In Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="login-button"
                >
                  Sign In
                </Button>
                
                {/* Forgot Password Link */}
                <div className="login-forgot">
                  <Typography 
                    variant="body2" 
                    color="primary" 
                    className="login-link"
                    onClick={() => console.log('Forgot password clicked')}
                  >
                    Forgot Password?
                  </Typography>
                </div>
                
                {/* OR Divider */}
                <div className="login-divider">
                  <Divider className="login-divider-line" />
                  <Typography variant="body2" className="login-divider-text">OR</Typography>
                  <Divider className="login-divider-line" />
                </div>
                
                {/* Social Login Buttons */}
                <div className="login-social">
                  <Button
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    onClick={handleGoogleLogin}
                    className="login-social-button login-social-google"
                  >
                    Google
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<FacebookIcon />}
                    onClick={handleFacebookLogin}
                    className="login-social-button login-social-facebook"
                  >
                    Facebook
                  </Button>
                </div>
              </Box>
            </Paper>
            
            <div className="login__footer">
              {/* Register Link */}
              <div className="login-register">
                <Typography variant="body2">
                  Don't have an account?{' '}
                  <Typography
                    component="span"
                    variant="body2"
                    color="primary"
                    className="login-link login-link-bold"
                    onClick={() => console.log('Register clicked')}
                  >
                    Register
                  </Typography>
                </Typography>
              </div>
              
              {/* Help Text */}
              <div className="login-help">
                <Typography variant="body2" color="text.secondary">
                  Use <strong>admin@example.com/password</strong> as Admin to log in
                </Typography>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default LoginPage;