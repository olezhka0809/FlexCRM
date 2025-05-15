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
  Alert,
  Snackbar
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { MyContext } from '../../App'; // Context global
import LOGO from '../../assets/images/logo_full.webp';
import PATERN from '../../assets/images/background.webp';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);

  const navigate = useNavigate();
  const context = useContext(MyContext);

  useEffect(() => {
    // Set the flag to hide sidebar and header
    context.setIsHideSidebarAndHeader(true);
    
    // Cleanup when component unmounts
    return () => {
      context.setIsHideSidebarAndHeader(false);
    };
  }, [context]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate email
    if (!email) {
      setError('Email address is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // TODO: Implement actual password reset logic here
    // This would typically involve an API call to your backend
    
    // Simulate success
    setIsSubmitted(true);
    setOpenSuccessSnackbar(true);
    
    // You could also redirect after a delay
    setTimeout(() => {
      navigate('/LoginPage');
    }, 5000);
  };

  const handleCloseSnackbar = () => {
    setOpenSuccessSnackbar(false);
  };

  const handleBackToLogin = () => {
    navigate('/LoginPage');
  };

  return (
    <>
      <img src={PATERN} alt="background-pattern" className="forgotPass__pattern" />
      <section className="forgotPassPage">
        <Container component="main" maxWidth="sm" className="forgotPass-container">
          <Paper elevation={6} className="forgotPass-paper">
            <Box className="forgotPass__head">
              <img src={LOGO} alt="Logo" className="forgotPass__head-logo" />
              <Typography variant="h4" component="h1" className="forgotPass__head-title">
                Reset Your Password
              </Typography>
            </Box>

            {!isSubmitted ? (
              <Box component="form" onSubmit={handleSubmit} className="forgotPass-form">
                {error && (
                  <Alert severity="error" className="forgotPass-error">
                    {error}
                  </Alert>
                )}

                <Typography variant="body1" className="forgotPass-instructions">
                  Enter your email address below and we'll send you instructions to reset your password.
                </Typography>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
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
                  className="forgotPass-field"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  className="forgotPass-button"
                >
                  Send Reset Instructions
                </Button>

                <Button
                  startIcon={<ArrowBackIcon />}
                  onClick={handleBackToLogin}
                  className="forgotPass-back-button"
                >
                  Back to Login
                </Button>
              </Box>
            ) : (
              <Box className="forgotPass-success">
                <Alert severity="success" className="forgotPass-success-alert">
                  Password reset instructions sent!
                </Alert>
                <Typography variant="body1" className="forgotPass-success-text">
                  We've sent an email to <strong>{email}</strong> with instructions to reset your password.
                  Please check your inbox and follow the link in the email.
                </Typography>
                <Button
                  startIcon={<ArrowBackIcon />}
                  onClick={handleBackToLogin}
                  className="forgotPass-back-button"
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Return to Login
                </Button>
              </Box>
            )}
          </Paper>
        </Container>
      </section>

      <Snackbar
        open={openSuccessSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Password reset email sent successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ForgotPasswordPage;