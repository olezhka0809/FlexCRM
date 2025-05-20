const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const companyRoutes = require('./routes/companyRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', authRoutes);
app.use('/api', companyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));

function setupLoginSubmit() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const messageContainer = document.getElementById('message-container') || 
                                document.createElement('div');
        
        // Dezactivăm butonul pentru a preveni submiteri multiple
        const submitButton = loginForm.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Se autentifică...';
        }
        
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            // Reactivăm butonul
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = 'Autentificare';
            }
            
            if (data.token) {
                // Stocăm token-ul și starea de autentificare
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('isLoggedIn', 'true');
                
                // Redirecționăm către pagina principală
                window.location.href = 'home.html';
            } else {
                showMessage(messageContainer, data.message || 'Eroare la autentificare', 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            
            // Reactivăm butonul
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = 'Autentificare';
            }
            
            showMessage(messageContainer, 'A apărut o eroare la autentificare', 'error');
        });
    });
}