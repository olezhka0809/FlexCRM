import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Paper, Typography, Box, InputAdornment, IconButton, Select, MenuItem, FormControl, InputLabel, Divider, Grid, Stepper, Step, StepLabel
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CategoryIcon from '@mui/icons-material/Category';

import { MyContext } from '../../App'; // Context global
import LOGO from '../../assets/images/logo_full.webp';
import PATERN from '../../assets/images/background.webp';


const RegisterPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Informații cont', 'Informații companie', 'Informații contact'];

  // Form state
  const [formData, setFormData] = useState({
    // Cont/Utilizator
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'Manager',
    
    // Companie
    companyName: '',
    companyPhone: '',
    country: '',
    city: '',
    address: '',
    postalCode: '',
    industry: '',
    
    // Contact personal
    firstName: '',
    lastName: '',
    personalPhone: '',
    position: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const context = useContext(MyContext);

  // Set sidebar and header visibility
  useState(() => {
    context.setIsHideSidebarAndHeader(true);
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Toggle password visibility
  const handleTogglePassword = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  // Validate current step
  const validateStep = () => {
    const newErrors = {};
    
    if (activeStep === 0) {
      // Validare Informații cont
      if (!formData.email) newErrors.email = 'Email-ul este obligatoriu';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalid';
      
      if (!formData.password) newErrors.password = 'Parola este obligatorie';
      else if (formData.password.length < 8) newErrors.password = 'Parola trebuie să aibă minim 8 caractere';
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Parolele nu coincid';
      }
    } 
    else if (activeStep === 1) {
      // Validare Informații companie
      if (!formData.companyName) newErrors.companyName = 'Numele companiei este obligatoriu';
      if (!formData.companyPhone) newErrors.companyPhone = 'Numărul de telefon al companiei este obligatoriu';
      if (!formData.country) newErrors.country = 'Țara este obligatorie';
      if (!formData.city) newErrors.city = 'Orașul este obligatoriu';
      if (!formData.address) newErrors.address = 'Adresa este obligatorie';
      if (!formData.industry) newErrors.industry = 'Industria este obligatorie';
    } 
    else if (activeStep === 2) {
      // Validare Informații contact
      if (!formData.firstName) newErrors.firstName = 'Prenumele este obligatoriu';
      if (!formData.lastName) newErrors.lastName = 'Numele este obligatoriu';
      if (!formData.personalPhone) newErrors.personalPhone = 'Numărul de telefon este obligatoriu';
      if (!formData.position) newErrors.position = 'Funcția este obligatorie';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle next step
  const handleNext = () => {
    if (validateStep()) {
      setActiveStep(prevStep => prevStep + 1);
    }
  };

  // Handle previous step
  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Process form submission
      console.log('Form submitted:', formData);
      // Aici ar veni logica de înregistrare
      
      // Redirect to login page
      navigate('/LoginPage');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/LoginPage');
  };

  // Step 1: Informații cont
  const renderAccountInfo = () => (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        className="register-field"
      />
      
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Parolă"
        type={showPassword ? 'text' : 'password'}
        id="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
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
                onClick={() => handleTogglePassword('password')}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          )
        }}
        className="register-field"
      />
      
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirmare parolă"
        type={showConfirmPassword ? 'text' : 'password'}
        id="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle confirm password visibility"
                onClick={() => handleTogglePassword('confirm')}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          )
        }}
        className="register-field"
      />
      
      <FormControl fullWidth margin="normal" className="register-field">
        <InputLabel id="user-type-label">Tip utilizator</InputLabel>
        <Select
          labelId="user-type-label"
          id="userType"
          name="userType"
          value={formData.userType}
          label="Tip utilizator"
          onChange={handleChange}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Manager">Manager</MenuItem>
          <MenuItem value="Agent">Agent vânzări</MenuItem>
          <MenuItem value="Support">Support</MenuItem>
        </Select>
      </FormControl>
    </>
  );

  // Step 2: Informații companie
  const renderCompanyInfo = () => (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id="companyName"
        label="Numele companiei"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        error={!!errors.companyName}
        helperText={errors.companyName}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BusinessIcon />
            </InputAdornment>
          ),
        }}
        className="register-field"
      />
      
      <TextField
        margin="normal"
        required
        fullWidth
        id="companyPhone"
        label="Telefon companie"
        name="companyPhone"
        value={formData.companyPhone}
        onChange={handleChange}
        error={!!errors.companyPhone}
        helperText={errors.companyPhone}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
        className="register-field"
      />
      
      <FormControl fullWidth margin="normal" className="register-field">
        <InputLabel id="industry-label">Industrie</InputLabel>
        <Select
          labelId="industry-label"
          id="industry"
          name="industry"
          value={formData.industry}
          label="Industrie"
          onChange={handleChange}
          error={!!errors.industry}
          startAdornment={
            <InputAdornment position="start">
              <CategoryIcon />
            </InputAdornment>
          }
        >
          <MenuItem value="IT">IT & Software</MenuItem>
          <MenuItem value="Finance">Finanțe & Banking</MenuItem>
          <MenuItem value="Healthcare">Sănătate</MenuItem>
          <MenuItem value="Education">Educație</MenuItem>
          <MenuItem value="Manufacturing">Producție</MenuItem>
          <MenuItem value="Retail">Retail & Comerț</MenuItem>
          <MenuItem value="Services">Servicii</MenuItem>
          <MenuItem value="Other">Altele</MenuItem>
        </Select>
      </FormControl>
      
      <Grid container spacing={2} className="register-address-grid">
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="country"
            label="Țară"
            name="country"
            value={formData.country}
            onChange={handleChange}
            error={!!errors.country}
            helperText={errors.country}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
            className="register-field"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="city"
            label="Oraș"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={!!errors.city}
            helperText={errors.city}
            className="register-field"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Adresă"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}
            className="register-field"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            margin="normal"
            fullWidth
            id="postalCode"
            label="Cod poștal"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            error={!!errors.postalCode}
            helperText={errors.postalCode}
            className="register-field"
          />
        </Grid>
      </Grid>
    </>
  );

  // Step 3: Informații contact
  const renderContactInfo = () => (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Prenume"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            className="register-field"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Nume"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            className="register-field"
          />
        </Grid>
      </Grid>
      
      <TextField
        margin="normal"
        required
        fullWidth
        id="personalPhone"
        label="Telefon personal"
        name="personalPhone"
        value={formData.personalPhone}
        onChange={handleChange}
        error={!!errors.personalPhone}
        helperText={errors.personalPhone}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
        className="register-field"
      />
      
      <TextField
        margin="normal"
        required
        fullWidth
        id="position"
        label="Funcția/Poziția în companie"
        name="position"
        value={formData.position}
        onChange={handleChange}
        error={!!errors.position}
        helperText={errors.position}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <WorkIcon />
            </InputAdornment>
          ),
        }}
        className="register-field"
      />
    </>
  );

  // Render current step content
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return renderAccountInfo();
      case 1:
        return renderCompanyInfo();
      case 2:
        return renderContactInfo();
      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      <img src={PATERN} alt="register__background-Patern" className="register__patern" />
      <section className="registerPage">
        <div className="register">
          
          <Container component="main" maxWidth="md" className="register-container">
            <Paper elevation={3} className="register-paper">
                {/* Header Logo și Titlu */}
                <div className="register__head">
                    <img src={LOGO} alt="Logo" className="register__head-logo" />
                    <h1 className="register__head-title">Înregistrare în FlexCrm</h1>
                </div>

              <Stepper activeStep={activeStep} alternativeLabel className="register-stepper">
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              
              <Box
                component="form"
                onSubmit={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                className="register-form"
              >
                
                {getStepContent(activeStep)}
                
                <div className="register-buttons">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className="register-back-button"
                  >
                    Înapoi
                  </Button>
                  
                  {activeStep === steps.length - 1 ? (
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="register-next-button"
                    >
                      Înregistrare
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className="register-next-button"
                    >
                      Înainte
                    </Button>
                  )}
                </div>
              </Box>
              {/* Login Link */}
              <div className="register-login">
                <Typography variant="body2">
                    Ai deja un cont?{' '}
                    <Typography
                    component="span"
                    variant="body2"
                    color="primary"
                    className="register-link register-link-bold"
                    onClick={handleLoginRedirect}
                    >
                    Autentificare
                    </Typography>
                </Typography>
              </div>
            </Paper>
            
          </Container>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;